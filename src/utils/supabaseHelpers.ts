
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";

// Helper functions for working with custom tables (not in the auto-generated types)
export const getAdminUsersTable = () => {
  // We need to use a more forceful type assertion to completely bypass TypeScript's type checking
  return supabase.from('admin_users') as unknown as ReturnType<typeof supabase.from>;
};

export const getTemplatesTable = () => {
  return supabase.from('templates') as unknown as ReturnType<typeof supabase.from>;
};

export const getPurchasesTable = () => {
  return supabase.from('purchases') as unknown as ReturnType<typeof supabase.from>;
};

export const getDownloadsTable = () => {
  return supabase.from('downloads') as unknown as ReturnType<typeof supabase.from>;
};

// Custom types for tables not in the auto-generated types
export interface AdminUser {
  user_id: string;
  added_at: string;
}

export interface Template {
  id: string;
  title: string;
  description: string | null;
  price: number;
  file_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Purchase {
  id: string;
  user_id: string | null;
  email: string;
  template_id: string;
  price: number;
  purchased_at: string;
  payment_id: string | null;
  payment_status: string | null;
  stripe_customer_id: string | null;
}

export interface Download {
  id: string;
  user_id: string;
  template_id: string;
  downloaded_at: string;
}
