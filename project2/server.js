var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
// app.get('/game', function(req, res){
//     res.sendFile(path.join(__dirname + '/test.js'))
// })

app.listen(PORT, function(){
    console.log("on port: " + PORT);
})