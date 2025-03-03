
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'
import Stripe from 'https://esm.sh/stripe@12.6.0?target=deno'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Initialize Stripe
const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2022-11-15',
})

// Initialize Supabase
const supabaseUrl = Deno.env.get('SUPABASE_URL') || ''
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
const supabase = createClient(supabaseUrl, supabaseKey)

console.log("Edge function starting")
console.log("Supabase URL:", supabaseUrl)
console.log("Stripe Key Available:", !!Deno.env.get('STRIPE_SECRET_KEY'))

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { 
      status: 204, 
      headers: corsHeaders 
    })
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), { 
      status: 405, 
      headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
    })
  }

  try {
    console.log("Received checkout request")
    const { templateId, templateName, price, email, successUrl, cancelUrl } = await req.json()
    
    console.log("Request data:", { templateId, templateName, price, email, successUrl, cancelUrl })

    // 無料テンプレートの場合は、決済をスキップして成功URLにリダイレクト
    if (price === 0) {
      console.log("Free template, redirecting to success URL:", successUrl)
      return new Response(
        JSON.stringify({ 
          url: successUrl,
          message: "無料テンプレートのため、決済をスキップします"
        }),
        { 
          status: 200, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // For paid templates, create a Stripe checkout session
    console.log("Creating Stripe checkout session for paid template")
    
    // Find user if they already have an account
    const { data: existingUsers } = await supabase
      .from('profiles')
      .select('id')
      .eq('email', email)
      .maybeSingle()
    
    console.log("Existing user check:", existingUsers)

    const lineItems = [
      {
        price_data: {
          currency: 'jpy',
          product_data: {
            name: templateName,
            description: `テンプレート: ${templateName}`,
          },
          unit_amount: price,
        },
        quantity: 1,
      },
    ]

    console.log("Line items:", lineItems)

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: email,
      metadata: {
        template_id: templateId,
        user_email: email,
      },
    })

    console.log("Session created:", { 
      id: session.id, 
      url: session.url,
      payment_status: session.payment_status 
    })

    // Return the session ID and URL
    return new Response(
      JSON.stringify({ 
        sessionId: session.id, 
        url: session.url 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  } catch (error) {
    console.error("Error in checkout function:", error)
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Internal server error' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})
