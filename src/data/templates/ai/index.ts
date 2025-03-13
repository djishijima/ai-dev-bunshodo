
import { Template } from "@/types/template";
import { chatbotTemplate } from "./chatbot-template";
import { aiMinutesTemplate } from "./ai-minutes";
import { aiCustomerSupportTemplate } from "./ai-chatbot";
import { aiContentGeneratorTemplate } from "./ai-content-generator";

export const aiTemplates: Template[] = [
  chatbotTemplate,
  aiMinutesTemplate,
  aiCustomerSupportTemplate,
  aiContentGeneratorTemplate
];
