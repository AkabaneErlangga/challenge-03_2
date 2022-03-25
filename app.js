global.users = [
    {
        id: '1648119736051',
        email: 'asd@asd.com',
        password: '$2b$10$iahv8.1Bbd0Wd3DIUbRj9u4JsbuvX62Ir1GSpq4rV9sXpu0Vvbd9a'
    }
]

// create dummy array of object named car
global.cars = [
    {
        id: '1648119736051',
        name: 'Toyota',
        category: 'Minibus',
        price: '100000',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        updatedAt: '1 Januari 2020',
        createdAt: '1 Januari 2020',
    },
    {
        id: '1648119736052',
        name: 'Honda',
        category: 'sedan',
        price: '200000',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        updatedAt: '1 Januari 2020',
        createdAt: '1 Januari 2020',
    },
    {
        id: '1648119736053',
        name: 'Suzuki',
        category: 'sedan',
        price: '300000',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        updatedAt: '1 Januari 2020',
        createdAt: '1 Januari 2020',
    },
    {
        id: '1648119736054',
        name: 'Daihatsu',
        category: 'minibus',
        price: '400000',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        updatedAt: '1 Januari 2020',
        createdAt: '1 Januari 2020',
    },
    {
        id: '1648119736055',
        name: 'Mitsubishi',
        category: 'sedan',
        price: '500000',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        updatedAt: '1 Januari 2020',
        createdAt: '1 Januari 2020',
    },
    {
        id: '1648119736056',
        name: 'Nissan',
        category: 'minibus',
        price: '600000',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        updatedAt: '1 Januari 2020',
        createdAt: '1 Januari 2020',
    },
    {
        id: '1648119736057',
        name: 'Mazda',
        category: 'sedan',
        price: '700000',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        updatedAt: '1 Januari 2020',
        createdAt: '1 Januari 2020',
    },
]

//create dummy array of object named order
global.orders = [
    {
        id: '1648119736051',
        userEmail: 'aqwe@asd.com',
        car: 'Toyota',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        price: '100000',
        status: 'process'
    },
    {
        id: '1648119736052',
        car: 'Honda',
        userEmail: 'jfklsjf@asd.com',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        price: '200000',
        status: 'done'
    },
    {
        id: '1648119736053',
        car: 'Suzuki',
        userEmail: 'gdfhg@asd.com',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        price: '300000',
        status: 'process'
    },
    {
        id: '1648119736054',
        car: 'Daihatsu',
        userEmail: 'uhwg@asd.com',
        startRent: '1 Januari 2020',
        finishRent: '1 Februari 2020',
        price: '400000',
        status: 'done'
    },
]


const express = require("express");
const expressLayouts = require('express-ejs-layouts')
const app = express();
const routers = require('./routers')

const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))

app.use(express.urlencoded({ extended: false })) // untuk mengirim data dari form melalui parameter req
app.use(express.json())

// Middleware untuk autentikasi & session
app.use(flash())
app.use(session({
    secret: 'fejsbinar',
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use((req, res, next) => {
    req.app.set('layout', 'layouts/default')
    next()
})

app.get('/', (req, res) => res.render('index'))
app.post('/logout', (req, res) => {
    req.logout()
    res.redirect('/auth/login')
})
app.use('/dashboard/', routers.dashboard)
app.use('/car/', routers.car)
app.use('/auth/', routers.auth)


app.listen(3000, () => { console.log("serve") })