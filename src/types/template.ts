
export interface Testimonial {
  name: string;
  role: string;
  comment: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface Update {
  date: string;
  content: string;
}

export interface AIModel {
  name: string;
  features: string[];
}

export interface APIUsage {
  description: string;
  pricePerUnit: number;
  unit: string;
}

export interface Template {
  id: string;
  title: string;
  description: string;
  price: number;
  technologies: string[];
  features: string[];
  includes: string[];
  testimonials: Testimonial[];
  benefits: Benefit[];
  updates: Update[];
  apiUsage?: APIUsage;
  difficulty: "初級" | "中級" | "上級";
  developmentTime: string;
}
