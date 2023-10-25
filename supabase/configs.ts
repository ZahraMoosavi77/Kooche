import { createClient } from "@supabase/supabase-js";
const supabaseKey = ''
  
const supabaseUrl = ''

export const supabase = createClient(supabaseUrl, supabaseKey);