

var Location = require("../models.location.js");

module.exports = function (app) {
    // Search for Specific Location (or all locations) then provides JSON
    app.get("/api/:locations?", function (req, res) {
        // If the user provides a specific Location in the URL...
        if (req.params.locations) {
            // Then display the JSON for ONLY that Location.
            // (Note how we're using the ORM here to run our searches)
            Location.findOne({
                where: {
                    routeName: req.params.locations
                }
            }).then(function (result) {
                return res.json(result);
            });
        }
        else {
            // Otherwise...
            // Otherwise display the data for all of the locations.
            // (Note how we're using Sequelize here to run our searches)
            Location.findAll({}).then(function (result) {
                return res.json(result);
            });
        };
    });
}