const express = require('express')
const router = express.Router()
const dashboardController = require('../controllers/dashboardController')

router.use((req, res, next) => {
    req.app.set('layout', 'layouts/dashboardLayout')
    next()
})

router.get('/', dashboardController.index)

module.exports = router