
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nperfbqbqzzcsagfwdxv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wZXJmYnFicXp6Y3NhZ2Z3ZHh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4MDU4MjUsImV4cCI6MjA1NTM4MTgyNX0.vO99xPXKTRXUxQrEvlS2zvOh9R_td0wlbyU7HSR7HJk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});
