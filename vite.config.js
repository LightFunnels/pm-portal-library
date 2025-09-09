import react from '@vitejs/plugin-react';
import path from "path";
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		react()
	],
	resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
	},
	server: {
		hmr: false,
		port: 9002
	},
  build: {
    rollupOptions: {
      // don’t bundle react into your lib
      external: ['react', 'react-dom'],
      output: {
        globals: { react: 'React', 'react-dom': 'ReactDOM' },
        assetFileNames: (asset) =>
          asset.name === 'style.css' ? 'pm-portal-library.css' : asset.name,
      },
    },
    minify: true,
    sourcemap: true,
  }
});