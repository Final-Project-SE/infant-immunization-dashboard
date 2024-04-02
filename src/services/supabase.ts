import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qbtbpkigcbxnqrrpbkvs.supabase.co"

export const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFidGJwa2lnY2J4bnFycnBia3ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNTkxMjcsImV4cCI6MjAyNzYzNTEyN30.1kSAnMwA3anRNfujEM-9uUiuIRSSW9iuQibq_fZsGWY"

console.log({ supabaseUrl, supabaseKey });

const supabase = createClient(supabaseUrl, supabaseKey);

export const imageBucketName = "wild-oasis-images";

export default supabase;
