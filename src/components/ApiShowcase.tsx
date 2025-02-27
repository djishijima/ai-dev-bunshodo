
import { motion } from "framer-motion";

const apis = [
  {
    name: "OpenAI API",
    description: "AI機能を簡単に実装するためのコードサンプルとガイド",
    readyFeatures: [
      "const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })",
      "const response = await openai.chat.completions.create({...})",
      "const stream = await openai.chat.completions.create({ stream: true })"
    ]
  },
  {
    name: "Google Calendar API",
    description: "カレンダー連携機能を実装するための完全なコード例",
    readyFeatures: [
      "const calendar = google.calendar({ version: 'v3', auth })",
      "await calendar.events.list({ calendarId: 'primary' })",
      "await calendar.events.insert({ calendarId: 'primary', ... })"
    ]
  },
  {
    name: "Stripe 決済 API",
    description: "安全な決済システムを構築するためのインテグレーション",
    readyFeatures: [
      "const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)",
      "const session = await stripe.checkout.sessions.create({...})",
      "app.post('/webhook', express.raw({ type: 'application/json' }))"
    ]
  },
  {
    name: "Supabase 認証 API",
    description: "堅牢なユーザー認証・管理システムの実装方法",
    readyFeatures: [
      "const { data, error } = await supabase.auth.signUp({...})",
      "const { data: { session } } = await supabase.auth.getSession()",
      "await supabase.from('profiles').select('*').eq('id', user.id)"
    ]
  }
];

export const ApiShowcase = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const codeVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-24 px-4 relative">
      <div className="absolute inset-0 pointer-events-none bg-[url('/path/to/grid-pattern.svg')] opacity-5"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title text-4xl sm:text-5xl font-bold mb-6">
            主要API連携
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            必要な機能を即座に実装できるよう、業界標準のAPIと連携した実装例を提供します。
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {apis.map((api, index) => (
            <motion.div
              key={api.name}
              variants={itemVariants}
              className="glass-card p-8 rounded-md overflow-hidden"
            >
              <h3 className="text-xl font-medium text-white mb-3">{api.name}</h3>
              <p className="text-white/60 mb-6">{api.description}</p>
              
              <div className="space-y-3 relative">
                <div className="absolute -left-4 h-full w-1 bg-gradient-to-b from-purple/50 via-magenta/30 to-purple/10 rounded-full"></div>
                
                {api.readyFeatures.map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    variants={codeVariants}
                    custom={idx}
                    className="pl-4"
                  >
                    <div className="bg-black/30 border border-white/5 rounded-md p-3 font-mono text-sm overflow-x-auto">
                      <code className="text-white/80">
                        <span className="text-purple-light">{feature.split('(')[0]}</span>
                        <span>{feature.includes('(') ? `(${feature.split('(')[1]}` : ''}</span>
                      </code>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
