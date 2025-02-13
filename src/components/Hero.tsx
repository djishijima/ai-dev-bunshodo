
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 px-4 text-center"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          Build Your SaaS in Minutes
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Premium source code templates with AI and API integrations.
          Launch your next project faster than ever.
        </p>
        <div className="flex justify-center gap-4">
          <Button className="premium-button">
            Browse Templates
          </Button>
          <Button variant="outline" className="px-6 py-3 rounded-full">
            Learn More
          </Button>
        </div>
      </motion.div>
    </motion.section>
  );
};
