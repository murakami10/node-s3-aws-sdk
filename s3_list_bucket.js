import { ListBucketsCommand } from '@aws-sdk/client-s3';
import { s3Client } from './lib/s3Client.js';

const run = async () => {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    console.log('Success', data.Buckets);
    return data;
  } catch (err) {
    console.log('Error', err);
  }
};

run();
