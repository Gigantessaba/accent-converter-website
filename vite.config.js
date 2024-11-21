import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    server: {
      port: 3000
    },
    define: {
      'process.env.VITE_API_ENDPOINT': JSON.stringify(env.VITE_API_ENDPOINT),
      'process.env.VITE_AWS_REGION': JSON.stringify(env.VITE_AWS_REGION),
      'process.env.VITE_AWS_ACCESS_KEY_ID': JSON.stringify(env.VITE_AWS_ACCESS_KEY_ID),
      'process.env.VITE_AWS_SECRET_ACCESS_KEY': JSON.stringify(env.VITE_AWS_SECRET_ACCESS_KEY),
      'process.env.VITE_STAGE': JSON.stringify(env.VITE_STAGE)
    }
  };
});