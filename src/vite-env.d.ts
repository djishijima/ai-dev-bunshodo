
/// <reference types="vite/client" />

// Extend the Supabase types to handle custom tables
declare module '@supabase/supabase-js' {
  interface CustomTypes {
    admin_users: any;
    templates: any;
    purchases: any;
    downloads: any;
  }
}
