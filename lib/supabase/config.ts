const defaultProjectUrl = "https://bxcynsahtkknaxmmsvao.supabase.co";
const defaultPublishableKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4Y3luc2FodGtrbmF4bW1zdmFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI5MzIzODQsImV4cCI6MjA3ODUwODM4NH0.8NWs3y-gLUVYJdpsLSFTjswddYEuk_YDDGwDvU2lTtw";

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? defaultProjectUrl;
export const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? defaultPublishableKey;
export const isSupabaseConfigured = Boolean(supabaseUrl && supabasePublishableKey);
