module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['www.google.co.uk'],
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    googleApiKey: process.env.GOOGLE_API_KEY,
    googleContextKey: process.env.GOOGLE_CONTEXT_KEY,
    customSearchApi: 'https://www.googleapis.com/customsearch/v1',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
  },
};
