import { createClient } from "@supabase/supabase-js";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxY3R3am51bnR4aWlmY215bGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1MzUxMDMsImV4cCI6MjAxMzExMTEwM30.NxgEkf36I18wpeZzEmBRwXBggZtpatwk6Mdcom5EZyE";

const supabaseUrl = "https://rqctwjnuntxiifcmyliy.supabase.co";

export const supabase = createClient(supabaseUrl, supabaseKey);
