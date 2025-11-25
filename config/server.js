module.exports = ({ env }) => ({
  host: env('HOST', '192.168.0.20'),
  port: env.int('PORT', 1337),
  url: env('URL', 'https://plc-api.craftnotion.com'),
  
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
