import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true, // Optional: true for faster, cached responses in production
});

export default client;
