// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://aafnmdzwsrmbbuenhumz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhZm5tZHp3c3JtYmJ1ZW5odW16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAxNjQxMDIsImV4cCI6MjA0NTc0MDEwMn0.1wlT5MYQddqJxK6iNw9goDxRGGdxllzPhxBz8fYyVbo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);