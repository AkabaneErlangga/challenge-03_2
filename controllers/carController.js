module.exports = {
    index: (req, res) => res.render('car/index', {user: "John Budiman"}),
    addCar: (req, res) => res.render('car/addCar', {user: "John Budiman"}),
}