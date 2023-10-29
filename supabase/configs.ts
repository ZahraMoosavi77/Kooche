import { createClient } from "@supabase/supabase-js";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxY3R3am51bnR4aWlmY215bGl5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzUzNTEwMywiZXhwIjoyMDEzMTExMTAzfQ.O3YnA0zn-VExOzwa49KB6L9oE3achQSOM3HPumHbOMQ";
const supabaseUrl = "https://rqctwjnuntxiifcmyliy.supabase.co";

export const supabase = createClient(supabaseUrl, supabaseKey);
