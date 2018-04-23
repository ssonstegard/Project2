var express = require("express");
var router = express.Router();
var location = require("../models/location.js");

router.get("/", function(req, res){
    location.selectOne(function(data){
        res.send(location.id);
    })
})

module.exports = router;