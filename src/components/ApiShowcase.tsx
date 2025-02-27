
import { motion } from "framer-motion";

const apis = [
  {
    name: "OpenAI API",
    description: "強力なAI機能を簡単に実装するためのインテグレーション",
    readyFeatures: [
      "const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })",
      "const response = await openai.chat.completions.create({...})",
      "const stream = await openai.chat.completions.create({ stream: true })"
    ]
  },
  {
    name: "Google Calendar API",
    description: "スケジューリング機能のシームレスな統合",
    readyFeatures: [
      "const calendar = google.calendar({ version: 'v3', auth })",
      "await calendar.events.list({ calendarId: 'primary' })",
      "await calendar.events.insert({ calendarId: 'primary', ... })"
    ]
  },
  {
    name: "Stripe 決済 API",
    description: "セキュアな決済処理の完全実装",
    readyFeatures: [
      "const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)",
      "const session = await stripe.checkout.sessions.create({...})",
      "app.post('/webhook', express.raw({ type: 'application/json' }))"
    ]
  },
  {
    name: "Supabase 認証 API",
    description: "堅牢なユーザー管理システムの構築",
    readyFeatures: [
      "const { data, error } = await supabase.auth.signUp({...})",
      "const { data: { session } } = await supabase.auth.getSession()",
      "await supabase.from('profiles').select('*').eq('id', user.id)"
    ]
  }
];

export const ApiShowcase = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-6">
            主要API<span className="text-primary">連携済み</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            すぐに使えるAPIインテグレーションにより、開発時間を大幅に短縮します。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {apis.map((api, index) => (
            <motion.div
              key={api.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card p-8 rounded-md border border-white/5"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{api.name}</h3>
              <p className="text-muted-foreground mb-6">{api.description}</p>
              
              <div className="space-y-3">
                {api.readyFeatures.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="bg-background border border-white/5 rounded-md p-3 font-mono text-sm overflow-x-auto"
                  >
                    <code>
                      <span className="text-primary">{feature.split('(')[0]}</span>
                      <span className="text-white/80">{feature.includes('(') ? `(${feature.split('(')[1]}` : ''}</span>
                    </code>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
