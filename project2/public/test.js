window.onload = function() {
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    var img = document.getElementById("bgP");
    ctx.drawImage(img, 0, 0, img.width, img.height,
                    0, 0, canvas.width, canvas.height);
    $('#buttonQ').hide();
    $('#buttonW').hide();
    $('#buttonE').hide();
    $('#buttonR').hide();
};
//ctx.clearRect(0, 0, canvas.width, canvas.height); clears canvas image
var options = [
    ['Visit Mechanic', 'Visit Tavern', 'Visit Mayor', 'Go to Wasteland'],//1
    ['Ask about acquiring a transport', 'Attempt to rob the mechanic'],//2
    ['Offer Mechanic booze to "look the other way', 'Pay'],//3
    ['Order Drink', 'Rob place', 'Approach passed out patron', 'Approach socializing bikers.'],//4
    ['Inquire about transports', 'Tell bar story']//5
    ['Inquire about Eden City papers', 'Inquire about coding job opportunities']//6
]

$(document).ready(function(){

$("#startB").on("click", function(event){
    event.preventDefault();
    $('#buttonQ').show();
    $('#buttonW').show();
    $('#buttonE').show();
    $('#buttonR').show();
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
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '3':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '4':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '5':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '6':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '7':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '8':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '9':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '10':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '11':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '12':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '13':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '14':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '15':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '16':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '17':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '18':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '19':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '20':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '21':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '22':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '23':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '24':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '25':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '26':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '27':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '28':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '29':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '30':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '31':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '32':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '33':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '34':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '35':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '36':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '37':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '38':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '39':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '40':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '41':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '42':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '43':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '44':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '45':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '46':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '47':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '48':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '49':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;
        case '50':
            $('#buttonQ').html(options[0][0]);
            $('#buttonW').html(options[0][1]);
            $('#buttonE').html(options[0][2]);
            $('#buttonR').html(options[0][3]);
            break;

    }

}
});

});