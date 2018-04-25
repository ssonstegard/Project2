window.onload = function() {
    $('#cB').hide();
    $('#placeN').hide();
    var canvas = document.getElementById("mainCanvas");
    var ctx = canvas.getContext("2d");
    var img = new Image();
    img.src = 'images/Wasteland.png';
    img.onload = function(){
        ctx.drawImage(img, 0, 0, img.width, img.height,
                        0, 0, canvas.width, canvas.height);
    }
    $('#buttonQ').hide();
    $('#buttonW').hide();
    $('#buttonE').hide();
    $('#buttonR').hide();
};
//ctx.clearRect(0, 0, canvas.width, canvas.height); clears canvas image
var options = [
    ['Visit Mechanic', 'Visit Tavern', 'Visit Mayor', 'Go to Wasteland on foot'],//0
    ['Ask about acquiring a transport', 'Attempt to rob the mechanic', 'Leave'],//1
    ['Approach socializing bikers.','Rob place', 'Approach passed out patron'],//2
    ['Inquire about Eden City papers', 'Inquire about coding job opportunities', 'Leave'],//3
    ['Pay', 'Give Mechanic Booze to "look the other way"'],//4
    ['Restart Game'],//5
    ['All Yours!', 'I must have lost my keys'],//6
    ['Inquire about transports', 'Tell bar story', 'Ask about coding job opportunities'],//7
    ['Wake up Patron'], //8
    ['Return to Bar'],//9
    ['Hahahaha', 'Inquire about job opportunity', 'Leave'],//10
    ['Tell him to stick his job where the sun dont shine', 'Inquire about job opportunity', 'Leave'],//11
    ['Agree', 'Leave'],//12
    ['Return to Mayors office'],//13
    ['Inquire about Eden City papers', 'Inquire about additional jobs', 'Leave'],//14
    ['Inquire about Eden City papers', 'Inquire about transports', 'Leave'],//15
    ['Inquire about Eden City papers', 'Inquire about Secret Tunnel', 'Leave'],//16
    ['Keep Walking', 'Enter Trailer', 'Go back to town'],//17
    ['Pick up Weapon', 'Leave'],//18
    ['Go to Eden City', 'Visit Trailer', 'Go back to town'],//19
    ['Visit Mechanic', 'Visit Tavern', 'Visit Mayor', 'Drive to Wasteland'], //20
    ['Present Papers', 'Inquire about Entry', 'Attempt to Enter with no Papers', 'Back to Wasteland'], //21
    ['Play again?'], //22
    ['Nice try'], //23
    ['Go back to Town'],//24  
    ['Go to prison'],//25
]
var text = [
    ['Where do you want to go?'], //0
    ['Greetings, What can I do for you?'], //1
    ['Drown your sorrows at the bar, or drown yourself out back.'],//2
    ['Im the mayor, what do you need?'],//3
    ['Thatll cost ya $10'],//4
    ['All yours!  Try not to crash it.'],//5
    ['Oh boy!  I mustve dropped the Mayors keys in a clumsy drunkin stumble.'],//6
    ['You failed.  Never mess with a guy with access to many blunt instruments and endless time to figure out how to use them.'],//7
    ['You dont even get through the "is" in "this is a robbery" before you get pumped full of a dozen kinds of lead. Never, ever get between wastelanders and their booze.'],//8
    ['Patron does not appreciate being woken up.  You get into a bar fight.  You die'], //9
    ['You cant have my bike, go ask the mechanic'], //10
    ['You proceed to tell the bikers about your time on a bike, but really you just recited 12 episodes from Sons of Anarchy.'], //11
    ['The Mayor has been giving us a bit of grief for not living up to his standards of society.  Find a spray can and mess up his office!'],//12
    ['If you want those entry papers, youll have to do me a favor first.'],//13
    ['As you can see, Im busy, and cannot leave my post.  I need you to get me some nails.  Heres some money'],//14
    ['You’ve been thrown in prison for insulting the mayor.'],//15
    ['Go vandalize their bikes'],//16
    ['Heres your paper for Eden city'],//17
    ['You see a trailer. Do you want to go inside or keep walking?'],//18
    ['You see a weapon'],//19
    ['You made it to Eden city gates'],//20
    ['You have your paperwork. Go on in'],//21
    ['You need paperworks to enter'],//22
    ['You attempt to drive through the blockade and gain entry to Eden City.  You crash into the gate and are shot multiple times'],//23
    ['You made it to Eden. Good Job']//24

]

$(document).ready(function(){

$("#startB").on("click", function(event){
    event.preventDefault();
    //$('#cB').html(text[]);
    $('#buttonQ').show();
    $('#buttonW').show();
    $('#buttonE').show();
    $('#buttonR').show();
    $('#cB').show();
    //$('#cB').html(text[]);.html();
    $(this).hide();
    $(this).val('1');
    // var canvas = document.getElementById("mainCanvas");
    // var ctx = canvas.getContext("2d");
    // var img = 
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.drawImage(img, 0, 0, img.width, img.height,
    //                 0, 0, canvas.width, canvas.height);
    var id = $('#startB').val();
    console.log(id)
    $.get('/api/'+id, function(data){ //set :id? equal to the button value
        //$('#cB').html(text[]);
        $('#buttonQ').val(data.route1);
        $('#buttonW').val(data.route2);
        $('#buttonE').val(data.route3);
        $('#buttonR').val(data.route4);
        var canvas = document.getElementById("mainCanvas");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.src = data.image;
        img.onload = function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
                        0, 0, canvas.width, canvas.height);
        }
        change();
    });
//});
//$('#cB').html(text[]);
$('#buttonQ').on('click', function(event){
    event.preventDefault();
    id = $('#buttonQ').val();
    $.get('/api/'+id, function(data){
        //$('#cB').html(text[]);
        $('#buttonQ').val(data.route1);
        $('#buttonW').val(data.route2);
        $('#buttonE').val(data.route3);
        $('#buttonR').val(data.route4);
        $('#buttonW').show();
        $('#buttonE').show();
        $('#buttonR').show();
        if($('#buttonW').val() == ''){
            $('#buttonW').hide();
        }
        if($('#buttonE').val() == ''){
            $('#buttonE').hide();
        }
        if($('#buttonR').val() == ''){
            $('#buttonR').hide();
        }
        var canvas = document.getElementById("mainCanvas");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.src = data.image;
        img.onload = function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
                        0, 0, canvas.width, canvas.height);
        }
        change();
    });
});
$('#buttonW').on('click', function(event){
    event.preventDefault();
    id = $('#buttonW').val();
    $.get('/api/'+id, function(data){
        //$('#cB').html(text[]);
        $('#buttonQ').val(data.route1);
        $('#buttonW').val(data.route2);
        $('#buttonE').val(data.route3);
        $('#buttonR').val(data.route4);
        $('#buttonW').show();
        $('#buttonE').show();
        $('#buttonR').show();
        if($('#buttonW').val() == ''){
            $('#buttonW').hide();
        }
        if($('#buttonE').val() == ''){
            $('#buttonE').hide();
        }
        if($('#buttonR').val() == ''){
            $('#buttonR').hide();
        }
        var canvas = document.getElementById("mainCanvas");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.src = data.image;
        img.onload = function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
                        0, 0, canvas.width, canvas.height);
        }
        change();
    });
});
$('#buttonE').on('click', function(event){
    event.preventDefault();
    id = $('#buttonE').val();
    $.get('/api/'+id, function(data){
        //$('#cB').html(text[]);
        $('#buttonQ').val(data.route1);
        $('#buttonW').val(data.route2);
        $('#buttonE').val(data.route3);
        $('#buttonR').val(data.route4);
        $('#buttonW').show();
        $('#buttonE').show();
        $('#buttonR').show();
        if($('#buttonW').val() == ''){
            $('#buttonW').hide();
        }
        if($('#buttonE').val() == ''){
            $('#buttonE').hide();
        }
        if($('#buttonR').val() == ''){
            $('#buttonR').hide();
        }
        var canvas = document.getElementById("mainCanvas");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.src = data.image;
        img.onload = function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
                        0, 0, canvas.width, canvas.height);
        }
        change();
    });
});
$('#buttonR').on('click', function(event){
    event.preventDefault();
    id = $('#buttonR').val();
    $.get('/api/'+id, function(data){
        //$('#cB').html(text[]);
        $('#buttonQ').val(data.route1);
        $('#buttonW').val(data.route2);
        $('#buttonE').val(data.route3);
        $('#buttonR').val(data.route4);
        $('#buttonW').show();
        $('#buttonE').show();
        $('#buttonR').show();
        if($('#buttonW').val() == ''){
            $('#buttonW').hide();
        }
        if($('#buttonE').val() == ''){
            $('#buttonE').hide();
        }
        if($('#buttonR').val() == ''){
            $('#buttonR').hide();
        }
        var canvas = document.getElementById("mainCanvas");
        var ctx = canvas.getContext("2d");
        var img = new Image();
        img.src = data.image;
        img.onload = function(){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height,
                        0, 0, canvas.width, canvas.height);
        }
        change();
    });
});
function change(){
    console.log(id)
    switch(id){
        case '1':
        $('#cB').html(text[0]);
        $('#buttonQ').html(options[0][0]);
        $('#buttonW').html(options[0][1]);
        $('#buttonE').html(options[0][2]);
        $('#buttonR').html(options[0][3]);
        break;
    case '2':
        $('#cB').html(text[1]);
        $('#buttonQ').html(options[1][0]);
        $('#buttonW').html(options[1][1]);
        $('#buttonE').html(options[1][2]);
        $('#buttonR').html(options[1][3]);
        break;
    case '3':
        $('#cB').html(text[2]);
        $('#buttonQ').html(options[2][0]);
        $('#buttonW').html(options[2][1]);
        $('#buttonE').html(options[2][2]);
        $('#buttonR').html(options[2][3]);
        break;
    case '4':
        $('#cB').html(text[3]);
        $('#buttonQ').html(options[3][0]);
        $('#buttonW').html(options[3][1]);
        $('#buttonE').html(options[3][2]);
        $('#buttonR').html(options[3][3]);
        break;
    case '5':
        $('#cB').html(text[4]);
        $('#buttonQ').html(options[4][0]);
        $('#buttonW').html(options[4][1]);
        $('#buttonE').html(options[4][2]);
        $('#buttonR').html(options[4][3]);
        break;
    case '6':
        $('#cB').html(text[8]);
        $('#buttonQ').html(options[5][0]);
        $('#buttonW').html(options[5][1]);
        $('#buttonE').html(options[5][2]);
        $('#buttonR').html(options[5][3]);
        break;
    case '7':
        $('#cB').html(text[5]);
        $('#buttonQ').html(options[6][0]);
        $('#buttonW').html(options[6][1]);
        $('#buttonE').html(options[6][2]);
        $('#buttonR').html(options[6][3]);
        break;
    case '8':
        $('#cB').html(text[6]);
        $('#buttonQ').html(options[6][0]);
        $('#buttonW').html(options[6][1]);
        $('#buttonE').html(options[6][2]);
        $('#buttonR').html(options[6][3]);
        break;
    case '9':
        $('#cB').html(text[5]);
        $('#buttonQ').html(options[24][0]);
        $('#buttonW').html(options[24][1]);
        $('#buttonE').html(options[24][2]);
        $('#buttonR').html(options[24][3]);
        break;
    case '10':
        $('#cB').html(text[5]);
        $('#buttonQ').html(options[24][0]);
        $('#buttonW').html(options[24][1]);
        $('#buttonE').html(options[24][2]);
        $('#buttonR').html(options[24][3]);
        break;
    case '11':
        //$('#cB').html(text[]);
        $('#buttonQ').html(options[7][0]);
        $('#buttonW').html(options[7][1]);
        $('#buttonE').html(options[7][2]);
        $('#buttonR').html(options[7][3]);
        break;
    case '12':
        $('#cB').html(text[8]);
        $('#buttonQ').html(options[5][0]);
        $('#buttonW').html(options[5][1]);
        $('#buttonE').html(options[5][2]);
        $('#buttonR').html(options[5][3]);
        break;
    case '13':
        //$('#cB').html(text[]);
        $('#buttonQ').html(options[8][0]);
        $('#buttonW').html(options[8][1]);
        $('#buttonE').html(options[8][2]);
        $('#buttonR').html(options[8][3]);
        break;
    case '14':
        $('#cB').html(text[10]);
        $('#buttonQ').html(options[9][0]);
        $('#buttonW').html(options[9][1]);
        $('#buttonE').html(options[9][2]);
        $('#buttonR').html(options[9][3]);
        break;
    case '15':
        $('#cB').html(text[11]);
        $('#buttonQ').html(options[10][0]);
        $('#buttonW').html(options[10][1]);
        $('#buttonE').html(options[10][2]);
        $('#buttonR').html(options[10][3]);
        break;
    case '16':
        $('#cB').html(text[12]);
        $('#buttonQ').html(options[12][0]);
        $('#buttonW').html(options[12][1]);
        $('#buttonE').html(options[12][2]);
        $('#buttonR').html(options[12][3]);
        break;
    case '17':
        $('#cB').html(text[9]);
        $('#buttonQ').html(options[5][0]);
        $('#buttonW').html(options[5][1]);
        $('#buttonE').html(options[5][2]);
        $('#buttonR').html(options[5][3]);
        break;
    case '18':
        $('#cB').html(text[13]);
        $('#buttonQ').html(options[3][0]);
        $('#buttonW').html(options[3][1]);
        $('#buttonE').html(options[3][2]);
        $('#buttonR').html(options[3][3]);
        break;
    case '19':
        $('#cB').html(text[14]);
        $('#buttonQ').html(options[11][0]);
        $('#buttonW').html(options[11][1]);
        $('#buttonE').html(options[11][2]);
        $('#buttonR').html(options[11][3]);
        break;
    case '20':
        $('#cB').html(text[15]);
        $('#buttonQ').html(options[25][0]);
        $('#buttonW').html(options[25][1]);
        $('#buttonE').html(options[25][2]);
        $('#buttonR').html(options[25][3]);
        break;
    case '21':
        //$('#cB').html(text[]);
        $('#buttonQ').html(options[12][0]);
        $('#buttonW').html(options[12][1]);
        $('#buttonE').html(options[12][2]);
        $('#buttonR').html(options[12][3]);
        break;
    case '22':
        $('#cB').html(text[15]);
        $('#buttonQ').html(options[5][0]);
        $('#buttonW').html(options[5][1]);
        $('#buttonE').html(options[5][2]);
        $('#buttonR').html(options[5][3]);
        break;
    case '23':
        //$('#cB').html(text[0]);
        $('#buttonQ').html(options[0][0]);
        $('#buttonW').html(options[0][1]);
        $('#buttonE').html(options[0][2]);
        $('#buttonR').html(options[0][3]);
        break;
    case '24':
        //$('#cB').html(text[0]);
        $('#buttonQ').html(options[0][0]);
        $('#buttonW').html(options[0][1]);
        $('#buttonE').html(options[0][2]);
        $('#buttonR').html(options[0][3]);
        break;
    case '25':
        $('#cB').html(text[0]);
        $('#buttonQ').html(options[13][0]);
        $('#buttonW').html(options[13][1]);
        $('#buttonE').html(options[13][2]);
        $('#buttonR').html(options[13][3]);
        break;
    case '26':
        $('#cB').html(text[12]);
        $('#buttonQ').html(options[10][0]);
        $('#buttonW').html(options[10][1]);
        $('#buttonE').html(options[10][2]);
        $('#buttonR').html(options[10][3]);
        break;
    case '27':
        $('#cB').html(text[12]);
        $('#buttonQ').html(options[10][0]);
        $('#buttonW').html(options[10][1]);
        $('#buttonE').html(options[10][2]);
        $('#buttonR').html(options[10][3]);
        break;
    case '28':
        //$('#cB').html(text[0]);
        $('#buttonQ').html(options[0][0]);
        $('#buttonW').html(options[0][1]);
        $('#buttonE').html(options[0][2]);
        $('#buttonR').html(options[0][3]);
        break;
    case '29':
        $('#cB').html(text[16]);
        $('#buttonQ').html(options[14][0]);
        $('#buttonW').html(options[14][1]);
        $('#buttonE').html(options[14][2]);
        $('#buttonR').html(options[14][3]);
        break;
    case '30':
        //$('#cB').html(text[]);
        $('#buttonQ').html(options[12][0]);
        $('#buttonW').html(options[12][1]);
        $('#buttonE').html(options[12][2]);
        $('#buttonR').html(options[12][3]);
        break;
    case '31':
        //$('#cB').html(text[]);
        $('#buttonQ').html(options[24][0]);
        $('#buttonW').html(options[24][1]);
        $('#buttonE').html(options[24][2]);
        $('#buttonR').html(options[24][3]);
        break;
    // case '32':
    //     $('#cB').html(text[]);
    //$('#buttonQ').html(options[0][0]);
    //     $('#buttonW').html(options[0][1]);
    //     $('#buttonE').html(options[0][2]);
    //     $('#buttonR').html(options[0][3]);
    //     break;
    case '33':
        $('#cB').html(text[17]);
        $('#buttonQ').html(options[15][0]);
        $('#buttonW').html(options[15][1]);
        $('#buttonE').html(options[15][2]);
        $('#buttonR').html(options[15][3]);
        break;
    case '34':
        $('#cB').html(text[17]);
        $('#buttonQ').html(options[16][0]);
        $('#buttonW').html(options[16][1]);
        $('#buttonE').html(options[16][2]);
        $('#buttonR').html(options[16][3]);
        break;
    case '35':
        $('#cB').html(text[25]);
        $('#buttonQ').html(options[17][0]);
        $('#buttonW').html(options[17][1]);
        $('#buttonE').html(options[17][2]);
        $('#buttonR').html(options[17][3]);
        break;
    case '36':
        $('#cB').html(text[25]);
        $('#buttonQ').html(options[5][0]);
        $('#buttonW').html(options[5][1]);
        $('#buttonE').html(options[5][2]);
        $('#buttonR').html(options[5][3]);
        break;
    case '37':
        $('#cB').html(text[18]);
        $('#buttonQ').html(options[18][0]);
        $('#buttonW').html(options[18][1]);
        $('#buttonE').html(options[18][2]);
        $('#buttonR').html(options[18][3]);
        break;
    case '38':
        $('#cB').html(text[19]);
        $('#buttonQ').html(options[18][0]);
        $('#buttonW').html(options[18][1]);
        $('#buttonE').html(options[18][2]);
        $('#buttonR').html(options[18][3]);
        break;
    case '39':
        $('#cB').html(text[25]);
        $('#buttonQ').html(options[19][0]);
        $('#buttonW').html(options[19][1]);
        $('#buttonE').html(options[19][2]);
        $('#buttonR').html(options[19][3]);
        break;
    case '40':
        $('#cB').html(text[19]);
        $('#buttonQ').html(options[18][0]);
        $('#buttonW').html(options[18][1]);
        $('#buttonE').html(options[18][2]);
        $('#buttonR').html(options[18][3]);
        break;
    case '41':
        $('#cB').html(text[0]);
        $('#buttonQ').html(options[20][0]);
        $('#buttonW').html(options[20][1]);
        $('#buttonE').html(options[20][2]);
        $('#buttonR').html(options[20][3]);
        break;
    case '42':
        $('#cB').html(text[20]);
        $('#buttonQ').html(options[21][0]);
        $('#buttonW').html(options[21][1]);
        $('#buttonE').html(options[21][2]);
        $('#buttonR').html(options[21][3]);
        break;
    case '43':
        $('#cB').html(text[21]);
        $('#buttonQ').html(options[22][0]);
        $('#buttonW').html(options[22][1]);
        $('#buttonE').html(options[22][2]);
        $('#buttonR').html(options[22][3]);
        break;
    case '44':
        $('#cB').html(text[22]);
        $('#buttonQ').html(options[23][0]);
        $('#buttonW').html(options[23][1]);
        $('#buttonE').html(options[23][2]);
        $('#buttonR').html(options[23][3]);
        break;
    case '45':
        $('#cB').html(text[23]);
        $('#buttonQ').html(options[5][0]);
        $('#buttonW').html(options[5][1]);
        $('#buttonE').html(options[5][2]);
        $('#buttonR').html(options[5][3]);
        break;
    case '46':
        // $('#cB').html(text[]);
        $('#buttonQ').html(options[21][0]);
        $('#buttonW').html(options[21][1]);
        $('#buttonE').html(options[21][2]);
        $('#buttonR').html(options[21][3]);
        break;
    case '47':
        $('#cB').html(text[24]);
        $('#buttonQ').html(options[22][0]);
        $('#buttonW').html(options[22][1]);
        $('#buttonE').html(options[22][2]);
        $('#buttonR').html(options[22][3]);
        break;
    case '48':
        // $('#cB').html(text[]);
        $('#buttonQ').html(options[5][0]);
        $('#buttonW').html(options[5][1]);
        $('#buttonE').html(options[5][2]);
        $('#buttonR').html(options[5][3]);
        break;
    }

}
});

});