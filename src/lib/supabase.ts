
import { createClient } from '@supabase/supabase-js';

// 新しいSupabaseプロジェクトの認証情報を使用
const supabaseUrl = 'https://fkjgcszdgcbcdmclgfer.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZramdjc3pkZ2NiY2RtY2xnZmVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAwODUyMDgsImV4cCI6MjA1NTY2MTIwOH0.M-6eN4TW_87p1JpXAN5HhY1mRCK7b8GOFXiRdRuRmUM';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Export a helper function to check and log auth session
export const checkAuthSession = async () => {
  try {
    const { data, error } = await supabase.auth.getSession();
    console.log("Auth Session Check:", { data, error });
    return { data, error };
  } catch (err) {
    console.error("Error checking auth session:", err);
    return { data: null, error: err };
  }
};
