import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(process.env.NEXT_PUBLIC_UNITY_URL, process.env.NEXT_PUBLIC_UNITY_API_KEY);
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
const secret = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_PRIVATE_KEY)

export { supabase, secret }
