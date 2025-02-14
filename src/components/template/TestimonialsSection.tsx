
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  comment: string;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialsSection = ({ testimonials }: TestimonialsSectionProps) => {
  return (
    <div className="bg-card p-8 rounded-2xl border border-border">
      <h2 className="text-2xl font-semibold mb-8 text-card-foreground">ユーザーの声</h2>
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-secondary/50 p-6 rounded-xl border border-border"
          >
            <Quote className="w-8 h-8 text-primary mb-4" />
            <p className="text-card-foreground mb-4 italic">
              "{testimonial.comment}"
            </p>
            <div>
              <p className="font-semibold text-card-foreground">{testimonial.name}</p>
              <p className="text-muted-foreground text-sm">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
