const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://wdczqscxszuhcrmixfcm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkY3pxc2N4c3p1aGNybWl4ZmNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NzIwMzUsImV4cCI6MjA1ODA0ODAzNX0.lmZHpSPadF_n670cJJwVem-A0GfCCU95GzgsSpTw2F8';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

module.exports = supabase;