window.onload = function() {
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("bgP");
    ctx.drawImage(img, 0, 0, img.width, img.height,
                    0, 0, canvas.width, canvas.height);
};
//ctx.clearRect(0, 0, canvas.width, canvas.height); clears canvas image
var options = [
    ["you are stuck somewhere so you should find a way out", "you are dead no way around it", "you are missing items go find it now"],
    ["you are missing items still so go away", "something to show give it to me","blah blach blahc fhefbeufbei cejje j"],
    ["fefeefefe 3thiwhi  teiien di3wdbiw bidbiewbi", "grhithirehfei ceichei hrh3ihr i3hri", "this ireurwi  vjf veonqodfeiqfdou wbfowenfoweb"]
]
$(document).ready(function(){

$("#startB").on("click", function(event){
    event.preventDefault();
    $(this).hide();
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("bgO");
    ctx.drawImage(img, 0, 0);

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

function town(){
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("bgI");
    ctx.drawImage(img, 0, 0);
    $("#tb").html(arrText[2]);
    $("#opO").on("click", function(event){
        house();
    });
    $("#opT").on("click", function(event){
        houseT();
    });
    $("#opH").on("click", function(event){
        houseY();
    });

};

function townT(){
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("bgI");
    ctx.drawImage(img, 0, 0);
    $("#tb").html(arrText[3]);
    $("#opO").on("click", function(event){
        house();
    });
    $("#opT").on("click", function(event){
        houseT();
    });
    $("#opH").on("click", function(event){
        houseY();
    });
};

function townY(){
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("bgI");
    ctx.drawImage(img, 0, 0);
    $("#tb").html(arrText[4]);
    $("#opO").on("click", function(event){
        house();
    });
    $("#opT").on("click", function(event){
        houseT();
    });
    $("#opH").on("click", function(event){
        houseY();
    });
}

function house(){
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("bgP");
    ctx.drawImage(img, 0, 0);
    $("#tb").html(arrText[5]);
}

function houseT(){
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("bgP");
    ctx.drawImage(img, 0, 0);
    $("#tb").html(arrText[6]);
}

function houseY(){
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("bgP");
    ctx.drawImage(img, 0, 0);
    $("#tb").html(arrText[7]);
}

});