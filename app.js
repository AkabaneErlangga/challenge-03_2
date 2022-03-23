const express = require("express");
const expressLayouts = require('express-ejs-layouts')
const app = express();
const routers = require('./routers')

app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(express.static('public'))

app.use((req, res, next) => {
    req.app.set('layout', 'layouts/default')
    next()
})

app.get('/', (req, res) => res.render('index'))
app.use('/dashboard/', routers.dashboard)
app.use('/car/', routers.car)
app.use('/signin/', routers.signin)


app.listen(3000, () => { console.log("serve") })