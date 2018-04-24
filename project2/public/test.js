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
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("bgP");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    var id = $('#startB').val();
    console.log(id)
    $.get('/api/'+id, function(data){ //set :id? equal to the button value
        $('#buttonQ').val(data.route1);
        $('#buttonW').val(data.route2);
        $('#buttonE').val(data.route3);
        $('#buttonR').val(data.route4);
        change();
    });
//});
$('#buttonQ').on('click', function(event){
    event.preventDefault();
    id = $('#buttonQ').val();
    $.get('/api/'+id, function(data){
        $('#buttonQ').val(data.route1);
        $('#buttonW').val(data.route2);
        $('#buttonE').val(data.route3);
        $('#buttonR').val(data.route4);
        var canvas = document.getElementById("mainCanvas");
        var ctx = canvas.getContext("2d");
        var img = document.getElementById("bgP");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
                        0, 0, canvas.width, canvas.height);
        change();
    });
});
$('#buttonW').on('click', function(event){
    event.preventDefault();
    id = $('#buttonW').val();
    $.get('/api/'+id, function(data){
        $('#buttonQ').val(data.route1);
        $('#buttonW').val(data.route2);
        $('#buttonE').val(data.route3);
        $('#buttonR').val(data.route4);
        var canvas = document.getElementById("mainCanvas");
        var ctx = canvas.getContext("2d");
        var img = document.getElementById("bgP");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
                        0, 0, canvas.width, canvas.height);
        change();
    });
});
$('#buttonE').on('click', function(event){
    event.preventDefault();
    id = $('#buttonE').val();
    $.get('/api/'+id, function(data){
        $('#buttonQ').val(data.route1);
        $('#buttonW').val(data.route2);
        $('#buttonE').val(data.route3);
        $('#buttonR').val(data.route4);
        var canvas = document.getElementById("mainCanvas");
        var ctx = canvas.getContext("2d");
        var img = document.getElementById("bgP");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
                        0, 0, canvas.width, canvas.height);
        change();
    });
});
$('#buttonR').on('click', function(event){
    event.preventDefault();
    id = $('#buttonR').val();
    $.get('/api/'+id, function(data){
        $('#buttonQ').val(data.route1);
        $('#buttonW').val(data.route2);
        $('#buttonE').val(data.route3);
        $('#buttonR').val(data.route4);
        var canvas = document.getElementById("mainCanvas");
        var ctx = canvas.getContext("2d");
        var img = document.getElementById("bgP");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
                        0, 0, canvas.width, canvas.height);
        change();
    });
});
function change(){
    console.log(id)
    switch(id){
        case '1':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '2':
    }

}
});

});