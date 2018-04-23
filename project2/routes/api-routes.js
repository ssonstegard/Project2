var db = require("../models/");

module.exports = function (app) {
    // Search for Specific Location (or all locations) then provides JSON
    app.get("/api/:id?", function (req, res) {
        // If the user provides a specific Location in the URL...
        console.log(req.params.id);
       
        if (req.params.id) {
            // Then display the JSON for ONLY that Location.
            // (Note how we're using the ORM here to run our searches)
            db.Adventure.findOne({
                where: {
                    id: req.params.id
                    
                }
            }).then(function (result) {
                return res.json(result);
            });
        }
        else {
            // Otherwise...
            // Otherwise display the data for all of the locations.
            // (Note how we're using Sequelize here to run our searches)
            db.Adventure.findAll({}).then(function (result) {
                return res.json(result);
            });
        };
    });
}