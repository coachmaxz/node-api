const router = require('express').Router()

// GET: /api/v1
router.get('/', async function (req, res, next) {
  res.json({ 
    message: 'Last Updated: 2024-08-16 19:53 Version 0.0.1',
    datetime: new Date(),
  })
});

// Path: /api/v1/example
router.use('/example', require('./example.api'))

module.exports = router