window.onload = function() {
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("bgP");
    ctx.drawImage(img, 0, 0, img.width, img.height,
                    0, 0, canvas.width, canvas.height);
};
//ctx.clearRect(0, 0, canvas.width, canvas.height); clears canvas image
var options = [
    ['Visit Mechanic', 'Visit Tavern', 'Visit Mayor', 'Go to Wasteland'],//area 1
    ['Ask about acquiring a transport', 'Attempt to rob the mechanic'],//mech
    ['Offer Mechanic booze to "look the other way', 'Pay'],//mech
    ['Order Drink', 'Rob place', 'Approach passed out patron', 'Approach socializing bikers.'],//tavern
    ['Inquire about transports', 'Tell bar story']//tavern
    ['Inquire about Eden City papers', 'Inquire about coding job opportunities']//mayor
]

$(document).ready(function(){

$("#startB").on("click", function(event){
    event.preventDefault();
    $(this).hide();
    $(this).val('1');
    console.log($('#startB').val())
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("bgP");
    ctx.drawImage(img, 0, 0);
    $.ajax({
        url:"../models/location.js",
        method: 'GET'
    }).then(function(data){
        console.log(data);
    })

    $("#buttonQ").html(options[0][0]);
    $("#buttonW").html(options[0][1]);
    $("#buttonE").html(options[0][2]);
    $("#opO").on("click", function(event){
        town();
    });
    $("#opT").on("click", function(event){
        townT();
    });
    $("#opH").on("click", function(event){
        townY();
    });
});

});