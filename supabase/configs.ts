import { createClient } from "@supabase/supabase-js";
const supabaseKey = 
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4bHV2cmdqbmZneXlncmdxeWZlIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODY1Mjg5MSwiZXhwIjoyMDE0MjI4ODkxfQ.blpoBr-2u3SrLQVlClHwqbOoqPuZdga5H135Xc2Tk5c";
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjY2xiZXNsdXN2bXl1aHVlZm1yIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NzI1NTQxOSwiZXhwIjoyMDEyODMxNDE5fQ.ncYj7Mf81-yvfRmJZax7G0JQup75dYEX4dLe_1Gk4Bg'

  const supabaseUrl = "https://vcclbeslusvmyuhuefmr.supabase.co";

export const supabase = createClient(supabaseUrl, supabaseKey);
