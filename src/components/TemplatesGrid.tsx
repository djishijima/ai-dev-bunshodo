
import { TemplateCard } from "./TemplateCard";
import { motion } from "framer-motion";

const templates = [
  {
    title: "AI Chat Assistant",
    description: "Complete chat application with OpenAI integration and user management.",
    price: 99,
    technologies: ["React", "OpenAI", "Supabase"],
  },
  {
    title: "API Gateway",
    description: "Secure API gateway with authentication and rate limiting.",
    price: 149,
    technologies: ["NextJS", "TypeScript", "REST"],
  },
  {
    title: "Subscription Platform",
    description: "Full-featured subscription management system with Stripe integration.",
    price: 199,
    technologies: ["React", "Stripe", "Supabase"],
  },
  // Add more templates as needed
];

export const TemplatesGrid = () => {
  return (
    <section id="templates" className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="section-title">Premium Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <TemplateCard key={template.title} {...template} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
