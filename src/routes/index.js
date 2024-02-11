const router = require('express').Router()
const config = require('./../app/config')

// Example: /api/v1
router.use(`/api/v${config.apiVersion}`, require('./../routes/api'))

module.exports = router