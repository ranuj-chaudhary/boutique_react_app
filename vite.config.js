import eslint from 'vite-plugin-eslint';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
})

// plugins: [eslint()]: This configuration specifies that the ESLint plugin should 
// be included as part of the Vite build process. This ensures that ESLint is executed
//  during development, helping catch and report code issues in real-time.