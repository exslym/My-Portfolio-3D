import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	site: 'https://exslym.github.io',
	base: '/My-Portfolio-3D',
});
