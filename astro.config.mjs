// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // ==========================================
  // CONFIGURACIÓN PARA GITHUB PAGES
  // ==========================================
  
  // 1. Reemplaza "TU-USUARIO" con tu nombre de usuario real en GitHub
  site: 'https://TU-USUARIO.github.io',
  
  // 2. Reemplaza "NOMBRE-DEL-REPO" con el nombre exacto de tu repositorio en GitHub
  // OJO: Debe empezar con una barra diagonal (/)
  base: '/NOMBRE-DEL-REPO',

  // ==========================================
  vite: {
    plugins: [tailwindcss()]
  }
});