import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.NEXT_PUBLIC_UNITY_URL, process.env.NEXT_PUBLIC_UNITY_API_KEY);

export { supabase } 
 