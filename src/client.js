import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://faxmxjdskhvgnqfrpuvx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZheG14amRza2h2Z25xZnJwdXZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzMDQ3ODksImV4cCI6MjAwNzg4MDc4OX0.UO01VvtTTor2extmrjS5LuSARhxMtU9fbqlNed_NlpU'

export const supabase = createClient(supabaseUrl, supabaseKey);

