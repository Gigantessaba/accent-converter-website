import AWS from 'aws-sdk';
import { config } from '../config';

AWS.config.update({
  region: config.AWS_REGION,
  credentials: new AWS.Credentials({
    accessKeyId: config.AWS_ACCESS_KEY_ID,
    secretAccessKey: config.AWS_SECRET_ACCESS_KEY
  })
});

export const s3 = new AWS.S3();
export const transcribe = new AWS.TranscribeService();
export const polly = new AWS.Polly();