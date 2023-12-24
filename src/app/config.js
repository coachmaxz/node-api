require('custom-env').env(true)

module.exports = {

  apiUrl: process.env.API_URL,
  port: process.env.PORT,

  env_mode: process.env.NODE_ENV,
  isProduction: process.env.NODE_ENV === 'production',
  apiVersion: process.env.API_VERSION,

}