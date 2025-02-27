
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
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#1a1335]/10 to-background pointer-events-none"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <h2 className="section-title text-4xl font-bold mb-4">
          実装例とテンプレートコード
        </h2>
        <p className="text-xl text-center text-white/80 mb-16 max-w-2xl mx-auto">
          APIを使用するための具体的なコード例とガイドラインを提供します。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apis.map((api, index) => (
            <motion.div
              key={api.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-xl border border-white/5"
            >
              <h3 className="text-2xl font-bold mb-4 gradient-text">{api.name}</h3>
              <p className="text-white/80 mb-6">{api.description}</p>
              <div className="space-y-3">
                {api.readyFeatures.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.1 }}
                    className="flex items-center bg-black/40 rounded-lg p-3 font-mono text-sm border border-white/5"
                  >
                    <span className="text-[#D946EF]">{feature.split('(')[0]}</span>
                    <span className="text-white/90">{feature.includes('(') ? `(${feature.split('(')[1]}` : ''}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
