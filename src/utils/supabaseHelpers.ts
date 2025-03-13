
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";
import { PostgrestQueryBuilder } from "@supabase/supabase-js";

// Helper functions for working with custom tables (not in the auto-generated types)
export const getAdminUsersTable = () => {
  // Use double type assertion to bypass TypeScript's type checking
  return supabase.from('admin_users') as unknown as PostgrestQueryBuilder<any, any>;
};

export const getTemplatesTable = () => {
  return supabase.from('templates') as unknown as PostgrestQueryBuilder<any, any>;
};

export const getPurchasesTable = () => {
  return supabase.from('purchases') as unknown as PostgrestQueryBuilder<any, any>;
};

export const getDownloadsTable = () => {
  return supabase.from('downloads') as unknown as PostgrestQueryBuilder<any, any>;
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
