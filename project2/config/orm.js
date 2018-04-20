var connection = require("./connection.js");

var orm = {
    selectAll: function (cb) {
        var queryString = "SELECT FROM placeholder WHERE = ??;"
        connection.query(queryString, location, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;