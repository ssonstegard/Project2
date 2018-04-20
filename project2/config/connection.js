var mysql = require("mysql");
var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        port: 8889,
        password: 'root',
        database:'placeholder'
    });
};

connection.connect(function(err){
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(connection.threadId);
});

module.exports = connection;