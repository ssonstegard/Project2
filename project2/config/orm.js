var connection = require("./connection.js");

var orm = {
    selectOne: function (cb) {
        var queryString = "SELECT * FROM tests WHERE id = ?;"
        connection.query(queryString, location, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;