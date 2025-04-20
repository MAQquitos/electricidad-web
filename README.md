# GeneradorService - Aplicación de Contacto

Esta aplicación proporciona una interfaz para que los clientes soliciten servicios de reparación de generadores eléctricos.

## Tecnologías

- React + TypeScript
- Tailwind CSS para el diseño
- Supabase para la base de datos
- Vercel para el despliegue

## Configuración

1. Clona este repositorio
2. Crea un proyecto en Supabase y configura la tabla de contactos usando la migración proporcionada
3. Crea un archivo `.env` basado en `.env.example` y añade tus credenciales de Supabase
4. Instala las dependencias: `npm install`
5. Inicia el servidor de desarrollo: `npm run dev`

## Despliegue en Vercel

Para desplegar en Vercel:

1. Sube tu código a GitHub
2. Conecta tu repositorio a Vercel
3. Configura las variables de entorno en Vercel:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Despliega la aplicación

## Estructura del Proyecto

- `src/components`: Componentes reutilizables
- `src/pages`: Páginas de la aplicación
- `src/lib`: Utilidades y configuración de Supabase
- `supabase/migrations`: SQL para configurar la base de datos