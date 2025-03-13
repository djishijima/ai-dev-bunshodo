
import { motion } from "framer-motion";
import { TemplateCard } from "@/components/TemplateCard";
import { templates } from "@/data/templates";

export const TemplatesList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
      {templates.map((template, index) => (
        <TemplateCard key={template.title} {...template} index={index} />
      ))}
    </div>
  );
};
