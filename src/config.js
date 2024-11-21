export const config = {
  API_ENDPOINT: import.meta.env.VITE_API_ENDPOINT || 'http://localhost:3000',
  AWS_REGION: import.meta.env.VITE_AWS_REGION || 'us-east-1',
  AWS_ACCESS_KEY_ID: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  STAGE: import.meta.env.VITE_STAGE || 'dev'
};