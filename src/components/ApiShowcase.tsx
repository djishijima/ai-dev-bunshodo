
import { motion } from "framer-motion";

const apis = [
  {
    name: "OpenAI GPT-4",
    description: "チャットボット作成のための実装例とテンプレートコード",
    readyFeatures: [
      "const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })",
      "const response = await openai.chat.completions.create({...})",
      "const stream = await openai.chat.completions.create({ stream: true })"
    ]
  },
  {
    name: "Google Calendar",
    description: "カレンダー連携のための実装例とテンプレートコード",
    readyFeatures: [
      "const calendar = google.calendar({ version: 'v3', auth })",
      "await calendar.events.list({ calendarId: 'primary' })",
      "await calendar.events.insert({ calendarId: 'primary', ... })"
    ]
  },
  {
    name: "Stripe決済",
    description: "決済システム実装のためのコード例とガイド",
    readyFeatures: [
      "const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)",
      "const session = await stripe.checkout.sessions.create({...})",
      "app.post('/webhook', express.raw({ type: 'application/json' }))"
    ]
  },
  {
    name: "Supabase認証",
    description: "認証システム実装のためのコード例とガイド",
    readyFeatures: [
      "const { data, error } = await supabase.auth.signUp({...})",
      "const { data: { session } } = await supabase.auth.getSession()",
      "await supabase.from('profiles').select('*').eq('id', user.id)"
    ]
  }
];

export const ApiShowcase = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] text-transparent bg-clip-text">
          実装例とテンプレートコード
        </h2>
        <p className="text-xl text-center text-white/80 mb-16">
          APIを使用するための具体的なコード例とガイドラインを提供します。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apis.map((api, index) => (
            <motion.div
              key={api.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{api.name}</h3>
              <p className="text-white/80 mb-6">{api.description}</p>
              <div className="space-y-3">
                {api.readyFeatures.map((feature) => (
                  <div 
                    key={feature}
                    className="flex items-center bg-black/20 rounded-lg p-3 font-mono text-sm"
                  >
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
