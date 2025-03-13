
/// <reference types="vite/client" />

// Define custom types for Supabase tables not in the auto-generated types
interface Database {
  public: {
    Tables: {
      admin_users: {
        Row: {
          user_id: string;
          added_at: string;
        }
        Insert: {
          user_id: string;
          added_at?: string;
        }
        Update: {
          user_id?: string;
          added_at?: string;
        }
      }
      templates: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          price: number;
          file_url: string | null;
          created_at: string;
          updated_at: string;
        }
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          price: number;
          file_url?: string | null;
          created_at?: string;
          updated_at?: string;
        }
        Update: {
          id?: string;
          title?: string;
          description?: string | null;
          price?: number;
          file_url?: string | null;
          created_at?: string;
          updated_at?: string;
        }
      }
      purchases: {
        Row: {
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
        Insert: {
          id?: string;
          user_id?: string | null;
          email: string;
          template_id: string;
          price: number;
          purchased_at?: string;
          payment_id?: string | null;
          payment_status?: string | null;
          stripe_customer_id?: string | null;
        }
        Update: {
          id?: string;
          user_id?: string | null;
          email?: string;
          template_id?: string;
          price?: number;
          purchased_at?: string;
          payment_id?: string | null;
          payment_status?: string | null;
          stripe_customer_id?: string | null;
        }
      }
      downloads: {
        Row: {
          id: string;
          user_id: string;
          template_id: string;
          downloaded_at: string;
        }
        Insert: {
          id?: string;
          user_id: string;
          template_id: string;
          downloaded_at?: string;
        }
        Update: {
          id?: string;
          user_id?: string;
          template_id?: string;
          downloaded_at?: string;
        }
      }
    }
  }
}

// Extend the Supabase types to handle custom tables
declare module '@supabase/supabase-js' {
  interface CustomTypes {
    admin_users: any;
    templates: any;
    purchases: any;
    downloads: any;
  }
}
