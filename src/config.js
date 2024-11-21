export const config = {
  API_ENDPOINT: process.env.NODE_ENV === 'production'
    ? 'https://your-api-gateway-url.execute-api.us-east-1.amazonaws.com/prod'
    : 'http://localhost:3000',
  AWS_REGION: 'us-east-1',
  STAGE: process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
};