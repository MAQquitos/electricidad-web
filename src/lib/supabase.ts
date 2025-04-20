import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please connect to Supabase.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ContactFormData = {
  nombre: string;
  email: string;
  telefono: string;
  tipo_generador: string;
  mensaje: string;
};

export async function saveContactToSupabase(contactData: ContactFormData) {
  const { data, error } = await supabase
    .from('contacts')
    .insert([
      {
        nombre: contactData.nombre,
        email: contactData.email, 
        telefono: contactData.telefono,
        tipo_generador: contactData.tipo_generador,
        mensaje: contactData.mensaje
      }
    ])
    .select();

  if (error) {
    throw error;
  }

  return data;
}

export async function getContacts() {
  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  return data;
}