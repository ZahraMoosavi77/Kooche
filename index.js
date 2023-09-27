import { createClient } from "@supabase/supabase-js";

//import your components

 const supabase = createClient(process.env.UNITY_URL, process.env.UNITY_API_KEY);





 export {

    supabase
 }