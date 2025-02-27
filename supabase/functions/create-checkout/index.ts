
// Follow this setup guide to integrate the Deno runtime with Supabase:
// https://supabase.com/docs/guides/functions/deno
// https://stripe.com/docs/checkout/quickstart

import { serve } from "https://deno.land/std@0.131.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@12.18.0?dts";

// APIキーを環境変数から取得
const stripeSecretKey = Deno.env.get("STRIPE_SECRET_KEY") || "";
if (!stripeSecretKey) {
  console.error("Missing STRIPE_SECRET_KEY");
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2023-10-16", // 最新のAPIバージョンを指定
  httpClient: Stripe.createFetchHttpClient(),
});

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // プリフライトリクエストへの応答
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { templateId, templateName, price, email, successUrl, cancelUrl } = await req.json();

    // Stripeセッションを作成
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "jpy",
            product_data: {
              name: templateName,
              description: `テンプレート: ${templateName}`,
            },
            unit_amount: price, // 円単位
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: successUrl || `${req.headers.get("origin")}/template/${templateId}?success=true`,
      cancel_url: cancelUrl || `${req.headers.get("origin")}/template/${templateId}?canceled=true`,
      customer_email: email,
      metadata: {
        templateId,
        templateName,
      },
    });

    // セッションIDとURLを返す
    return new Response(
      JSON.stringify({
        sessionId: session.id,
        url: session.url,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
