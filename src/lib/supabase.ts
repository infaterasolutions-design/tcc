import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mcmilgxcyrxvdafseplz.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jbWlsZ3hjeXJ4dmRhZnNlcGx6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIyMzkzNTQsImV4cCI6MjA5NzgxNTM1NH0.e1E7naXesUzTNVyeft257eyzBTY4Y5ROYesh5x_ULFU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
