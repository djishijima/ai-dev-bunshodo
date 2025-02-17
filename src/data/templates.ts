
import { Template } from "@/types/template";
import { aiTemplates } from "./templates/ai-templates";
import { entertainmentTemplates } from "./templates/entertainment-templates";
import { educationTemplates } from "./templates/education-templates";
import { utilityTemplates } from "./templates/utility-templates";
import { freeTemplates } from "./templates/free-templates";

export const templates: Template[] = [
  ...freeTemplates,
  ...aiTemplates,
  ...entertainmentTemplates,
  ...educationTemplates,
  ...utilityTemplates
];

export type { Template } from "@/types/template";
export type { Testimonial, Benefit, Update, AIModel } from "@/types/template";
