// Express
const express = require('express')

// Setting
const app = express()
const config = require('./app/config')

// Express Configs
require('./app/express')(app)

// Routes
app.use(require('./routes'))
app.use(express.static('public'))

// Error handler
require('./app/errorHandler')(config.isProduction, app)

// Start Server
const server = app.listen(config.port, () => { 
  const host = server.address().address
  const port = server.address().port
  console.log(`Server is running at ${host}:${port}`)
})