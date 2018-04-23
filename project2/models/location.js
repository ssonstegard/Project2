var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js');

var Location = sequelize.define('location', {
    name: Sequelize.STRING,
    image: Sequelize.STRING,
    route1: Sequelize.INTEGER,
    route2: Sequelize.INTEGER,
    route3: Sequelize.INTEGER,
    route4: Sequelize.INTEGER
});

Locations.sync();

module.exports = Location;