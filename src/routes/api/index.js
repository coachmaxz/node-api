const router = require('express').Router()

router.get('/', async function (req, res, next) {
  res.json({ message: 'Last Updated: 2024-02-12 00:39 v0.0.1' })
});

router.use('/example', require('./example.api'))

module.exports = router