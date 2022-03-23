const express = require('express')
const carController = require('../controllers/carController')
const router = express.Router()

router.use((req, res, next) => {
    req.app.set('layout', 'layouts/dashboardLayout')
    next()
})

router.get('/', carController.index)
router.get('/add-car', carController.addCar)

module.exports = router