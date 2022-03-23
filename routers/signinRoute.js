const express = require('express')
const carController = require('../controllers/carController')
const signInController = require('../controllers/signInController')
const router = express.Router()

router.use((req, res, next) => {
    req.app.set('layout', 'layouts/default')
    next()
})

router.get('/', signInController.index)

module.exports = router