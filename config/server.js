module.exports = ({ env }) => ({
  host: env('HOST', '192.168.0.20'),
  port: env.int('PORT', 1337),
  url: env('URL', 'http://192.168.0.20:1337'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
