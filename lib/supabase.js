import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.UNITY_URL, process.env.UNITY_API_KEY);

export { supabase } 
 