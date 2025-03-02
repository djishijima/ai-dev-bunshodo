
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";
import Stripe from 'https://esm.sh/stripe@12.6.0?target=deno';

// CORSヘッダー設定
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // OPTIONSリクエスト（CORS preflight）の処理
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // 環境変数から設定
    const supabaseAdminClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
    );

    // Stripeキーを取得
    const stripeKey = Deno.env.get('STRIPE_SECRET_KEY');
    
    if (!stripeKey) {
      console.error("Stripe secret key is not set");
      return new Response(
        JSON.stringify({ error: "Stripeの設定がされていません" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Stripeクライアント初期化
    const stripe = new Stripe(stripeKey, {
      apiVersion: '2023-10-16',
    });

    // リクエストボディを取得
    const { templateId, templateName, price, email, successUrl, cancelUrl } = await req.json();

    console.log("チェックアウトセッション作成:", { 
      templateId, templateName, price, successUrl, cancelUrl
    });

    // Stripeチェックアウトセッション作成
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'jpy',
            product_data: {
              name: templateName,
              description: `${templateName}テンプレート - フルソースコード`,
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl,
      cancel_url: cancelUrl,
      customer_email: email,
      metadata: {
        templateId,
        templateName,
        buyerEmail: email,
      },
    });

    // 作成したチェックアウトセッションをDBに保存（オプション）
    if (session?.id) {
      await supabaseAdminClient
        .from('checkout_sessions')
        .insert({
          session_id: session.id,
          template_id: templateId,
          email: email,
          amount: price,
          created_at: new Date().toISOString(),
          status: 'created'
        })
        .select();
    }

    console.log("チェックアウトセッション作成成功:", { 
      sessionId: session.id, 
      url: session.url 
    });

    // 成功レスポンス
    return new Response(
      JSON.stringify({ 
        sessionId: session.id, 
        url: session.url 
      }),
      { 
        status: 200, 
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json" 
        } 
      }
    );
  } catch (error) {
    console.error("エラー:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { 
          ...corsHeaders, 
          "Content-Type": "application/json" 
        } 
      }
    );
  }
});

