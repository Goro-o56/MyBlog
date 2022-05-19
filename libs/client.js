import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: '560blog',
  apiKey: process.env.API_KEY,
});