const router = require('express').Router()

// GET: /api/v1/example
router.get('/', async function (req, res, next) {
  res.status(200).json({ code: 200, message: 'OK' })
})

// GET: /api/v1/example/:id
router.get('/:id', async function (req, res, next) {
  res.status(200).json({ code: 200, message: 'OK', data: req.params })
})

// POST: /api/v1/example
router.post('/', async function (req, res, next) {
  res.status(201).json({ code: 201, message: 'Created' })
})

// PUT: /api/v1/example/:id
router.put('/:id', async function (req, res, next) {
  res.status(200).json({ code: 200, message: 'Updated' })
})

// DELETE: /api/v1/example/:id
router.delete('/:id', async function (req, res, next) {
  res.status(200).json({ code: 204, message: 'Deleted' })
})

module.exports = router