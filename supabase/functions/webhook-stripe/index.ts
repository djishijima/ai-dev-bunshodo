
// Follow this setup guide to integrate the Deno runtime with Supabase:
// https://supabase.com/docs/guides/functions/deno
// https://stripe.com/docs/webhooks

import { serve } from "https://deno.land/std@0.131.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@12.18.0?dts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0";

// Supabase認証情報
const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
const stripeWebhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET") || "";
const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY") || "";

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing Supabase credentials");
}

if (!stripeWebhookSecret || !stripeSecretKey) {
  console.error("Missing Stripe credentials");
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2023-10-16",
  httpClient: Stripe.createFetchHttpClient(),
});

console.log("Webhook function starting");

serve(async (req) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }
  
  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return new Response(JSON.stringify({ error: "No signature provided" }), { 
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }

  try {
    // リクエストボディを取得
    const body = await req.text();
    console.log("Received webhook payload");
    
    // Stripe署名を検証
    const event = stripe.webhooks.constructEvent(body, signature, stripeWebhookSecret);
    console.log(`Webhook event type: ${event.type}`);

    // payment_intent.succeededイベントを処理
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("Processing checkout.session.completed", session.id);
      
      // メタデータからテンプレート情報を取得
      const templateId = session.metadata?.template_id;
      const userEmail = session.metadata?.user_email;
      const customerId = session.customer;
      const customerEmail = session.customer_email || userEmail;
      const paymentStatus = session.payment_status;
      const amountTotal = session.amount_total / 100; // セントから円に変換

      console.log(`Purchase details: template=${templateId}, email=${customerEmail}, status=${paymentStatus}, amount=${amountTotal}`);

      if (paymentStatus === "paid") {
        // ユーザーIDを取得（メールアドレスから検索）
        let userId = null;
        if (customerEmail) {
          try {
            const { data: userData, error: userError } = await supabase.auth.admin.listUsers();
            
            if (userError) {
              console.error("Error listing users:", userError);
            } else if (userData) {
              const user = userData.users.find(u => u.email === customerEmail);
              if (user) {
                userId = user.id;
                console.log(`Found user ID: ${userId} for email: ${customerEmail}`);
              } else {
                console.log(`No user found with email: ${customerEmail}`);
              }
            }
          } catch (err) {
            console.error("Error searching for user:", err);
          }
        }

        // Check if the purchase already exists
        const { data: existingPurchase, error: checkError } = await supabase
          .from("purchases")
          .select("id")
          .eq("payment_id", session.id)
          .maybeSingle();
          
        if (checkError) {
          console.error("Error checking existing purchase:", checkError);
        }
        
        if (existingPurchase) {
          console.log(`Purchase already recorded for session ${session.id}`);
          return new Response(JSON.stringify({ received: true, status: "already_processed" }), { 
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        // 購入記録をデータベースに保存
        const { data, error } = await supabase
          .from("purchases")
          .insert([
            {
              template_id: templateId,
              user_id: userId,
              email: customerEmail,
              price: amountTotal,
              purchased_at: new Date().toISOString(),
              payment_id: session.id,
              payment_status: paymentStatus,
              stripe_customer_id: customerId,
            },
          ]);

        if (error) {
          console.error("Error saving purchase:", error);
          return new Response(JSON.stringify({ error: "Failed to save purchase" }), { 
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" }
          });
        }

        console.log(`Purchase recorded for template ${templateId} by ${customerEmail}`);
      } else {
        console.log(`Payment not completed: ${paymentStatus}`);
      }
    }

    return new Response(JSON.stringify({ received: true }), { 
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  } catch (err) {
    console.error(`Webhook error: ${err.message}`);
    return new Response(JSON.stringify({ error: err.message }), { 
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    });
  }
});
