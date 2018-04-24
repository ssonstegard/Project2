window.onload = function () {
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
    ['Visit Mechanic', 'Visit Tavern', 'Visit Mayor', 'Go to Wasteland on foot'],//0
    ['Ask about acquiring a transport', 'Attempt to rob the mechanic', 'Leave'],//1
    ['Rob place', 'Approach passed out patron', 'Approach socializing bikers.'],//2
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
]

$(document).ready(function () {

    $("#startB").on("click", function (event) {
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
        $.get('/api/' + id, function (data) { //set :id? equal to the button value
            $('#buttonQ').val(data.route1);
            $('#buttonW').val(data.route2);
            $('#buttonE').val(data.route3);
            $('#buttonR').val(data.route4);
            change();
        });
        //});
        $('#buttonQ').on('click', function (event) {
            event.preventDefault();
            id = $('#buttonQ').val();
            $.get('/api/' + id, function (data) {
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
        $('#buttonW').on('click', function (event) {
            event.preventDefault();
            id = $('#buttonW').val();
            $.get('/api/' + id, function (data) {
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
        $('#buttonE').on('click', function (event) {
            event.preventDefault();
            id = $('#buttonE').val();
            $.get('/api/' + id, function (data) {
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
        $('#buttonR').on('click', function (event) {
            event.preventDefault();
            id = $('#buttonR').val();
            $.get('/api/' + id, function (data) {
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
        function change() {
            console.log(id)
            switch (id) {
                case '1':
                    $('#buttonQ').html(options[0][0]);
                    $('#buttonW').html(options[0][1]);
                    $('#buttonE').html(options[0][2]);
                    $('#buttonR').html(options[0][3]);
                    break;
                case '2':
                    $('#buttonQ').html(options[1][0]);
                    $('#buttonW').html(options[1][1]);
                    $('#buttonE').html(options[1][2]);
                    $('#buttonR').html(options[1][3]);
                    break;
                case '3':
                    $('#buttonQ').html(options[2][0]);
                    $('#buttonW').html(options[2][1]);
                    $('#buttonE').html(options[2][2]);
                    $('#buttonR').html(options[2][3]);
                    break;
                case '4':
                    $('#buttonQ').html(options[3][0]);
                    $('#buttonW').html(options[3][1]);
                    $('#buttonE').html(options[3][2]);
                    $('#buttonR').html(options[3][3]);
                    break;
                case '5':
                    $('#buttonQ').html(options[4][0]);
                    $('#buttonW').html(options[4][1]);
                    $('#buttonE').html(options[4][2]);
                    $('#buttonR').html(options[4][3]);
                    break;
                case '6':
                    $('#buttonQ').html(options[5][0]);
                    $('#buttonW').html(options[5][1]);
                    $('#buttonE').html(options[5][2]);
                    $('#buttonR').html(options[5][3]);
                    break;
                case '7':
                    $('#buttonQ').html(options[6][0]);
                    $('#buttonW').html(options[6][1]);
                    $('#buttonE').html(options[6][2]);
                    $('#buttonR').html(options[6][3]);
                    break;
                case '8':
                    $('#buttonQ').html(options[6][0]);
                    $('#buttonW').html(options[6][1]);
                    $('#buttonE').html(options[6][2]);
                    $('#buttonR').html(options[6][3]);
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
                    $('#buttonQ').html(options[7][0]);
                    $('#buttonW').html(options[7][1]);
                    $('#buttonE').html(options[7][2]);
                    $('#buttonR').html(options[7][3]);
                    break;
                case '12':
                    $('#buttonQ').html(options[5][0]);
                    $('#buttonW').html(options[5][1]);
                    $('#buttonE').html(options[5][2]);
                    $('#buttonR').html(options[5][3]);
                    break;
                case '13':
                    $('#buttonQ').html(options[8][0]);
                    $('#buttonW').html(options[8][1]);
                    $('#buttonE').html(options[8][2]);
                    $('#buttonR').html(options[8][3]);
                    break;
                case '14':
                    $('#buttonQ').html(options[9][0]);
                    $('#buttonW').html(options[9][1]);
                    $('#buttonE').html(options[9][2]);
                    $('#buttonR').html(options[9][3]);
                    break;
                case '15':
                    $('#buttonQ').html(options[10][0]);
                    $('#buttonW').html(options[10][1]);
                    $('#buttonE').html(options[10][2]);
                    $('#buttonR').html(options[10][3]);
                    break;
                case '16':
                    $('#buttonQ').html(options[0][0]);
                    $('#buttonW').html(options[0][1]);
                    $('#buttonE').html(options[0][2]);
                    $('#buttonR').html(options[0][3]);
                    break;
                case '17':
                    $('#buttonQ').html(options[5][0]);
                    $('#buttonW').html(options[5][1]);
                    $('#buttonE').html(options[5][2]);
                    $('#buttonR').html(options[5][3]);
                    break;
                case '18':
                    $('#buttonQ').html(options[3][0]);
                    $('#buttonW').html(options[3][1]);
                    $('#buttonE').html(options[3][2]);
                    $('#buttonR').html(options[3][3]);
                    break;
                case '19':
                    $('#buttonQ').html(options[11][0]);
                    $('#buttonW').html(options[11][1]);
                    $('#buttonE').html(options[11][2]);
                    $('#buttonR').html(options[11][3]);
                    break;
                case '20':
                    $('#buttonQ').html(options[5][0]);
                    $('#buttonW').html(options[5][1]);
                    $('#buttonE').html(options[5][2]);
                    $('#buttonR').html(options[5][3]);
                    break;
                case '21':
                    $('#buttonQ').html(options[12][0]);
                    $('#buttonW').html(options[12][1]);
                    $('#buttonE').html(options[12][2]);
                    $('#buttonR').html(options[12][3]);
                    break;
                case '22':
                    $('#buttonQ').html(options[5][0]);
                    $('#buttonW').html(options[5][1]);
                    $('#buttonE').html(options[5][2]);
                    $('#buttonR').html(options[5][3]);
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
                    $('#buttonQ').html(options[13][0]);
                    $('#buttonW').html(options[13][1]);
                    $('#buttonE').html(options[13][2]);
                    $('#buttonR').html(options[13][3]);
                    break;
                case '26':
                    $('#buttonQ').html(options[10][0]);
                    $('#buttonW').html(options[10][1]);
                    $('#buttonE').html(options[10][2]);
                    $('#buttonR').html(options[10][3]);
                    break;
                case '27':
                    $('#buttonQ').html(options[10][0]);
                    $('#buttonW').html(options[10][1]);
                    $('#buttonE').html(options[10][2]);
                    $('#buttonR').html(options[10][3]);
                    break;
                case '28':
                    $('#buttonQ').html(options[0][0]);
                    $('#buttonW').html(options[0][1]);
                    $('#buttonE').html(options[0][2]);
                    $('#buttonR').html(options[0][3]);
                    break;
                case '29':
                    $('#buttonQ').html(options[14][0]);
                    $('#buttonW').html(options[14][1]);
                    $('#buttonE').html(options[14][2]);
                    $('#buttonR').html(options[14][3]);
                    break;
                case '30':
                    $('#buttonQ').html(options[12][0]);
                    $('#buttonW').html(options[12][1]);
                    $('#buttonE').html(options[12][2]);
                    $('#buttonR').html(options[12][3]);
                    break;
                case '31':
                    $('#buttonQ').html(options[0][0]);
                    $('#buttonW').html(options[0][1]);
                    $('#buttonE').html(options[0][2]);
                    $('#buttonR').html(options[0][3]);
                    break;
                // case '32':
                //     $('#buttonQ').html(options[0][0]);
                //     $('#buttonW').html(options[0][1]);
                //     $('#buttonE').html(options[0][2]);
                //     $('#buttonR').html(options[0][3]);
                //     break;
                case '33':
                    $('#buttonQ').html(options[15][0]);
                    $('#buttonW').html(options[15][1]);
                    $('#buttonE').html(options[15][2]);
                    $('#buttonR').html(options[15][3]);
                    break;
                case '34':
                    $('#buttonQ').html(options[16][0]);
                    $('#buttonW').html(options[16][1]);
                    $('#buttonE').html(options[16][2]);
                    $('#buttonR').html(options[16][3]);
                    break;
                case '35':
                    $('#buttonQ').html(options[17][0]);
                    $('#buttonW').html(options[17][1]);
                    $('#buttonE').html(options[17][2]);
                    $('#buttonR').html(options[17][3]);
                    break;
                case '36':
                    $('#buttonQ').html(options[5][0]);
                    $('#buttonW').html(options[5][1]);
                    $('#buttonE').html(options[5][2]);
                    $('#buttonR').html(options[5][3]);
                    break;
                case '37':
                    $('#buttonQ').html(options[18][0]);
                    $('#buttonW').html(options[18][1]);
                    $('#buttonE').html(options[18][2]);
                    $('#buttonR').html(options[18][3]);
                    break;
                case '38':
                    $('#buttonQ').html(options[18][0]);
                    $('#buttonW').html(options[18][1]);
                    $('#buttonE').html(options[18][2]);
                    $('#buttonR').html(options[18][3]);
                    break;
                case '39':
                    $('#buttonQ').html(options[19][0]);
                    $('#buttonW').html(options[19][1]);
                    $('#buttonE').html(options[19][2]);
                    $('#buttonR').html(options[19][3]);
                    break;
                case '40':
                    $('#buttonQ').html(options[18][0]);
                    $('#buttonW').html(options[18][1]);
                    $('#buttonE').html(options[18][2]);
                    $('#buttonR').html(options[18][3]);
                    break;
                case '41':
                    $('#buttonQ').html(options[20][0]);
                    $('#buttonW').html(options[20][1]);
                    $('#buttonE').html(options[20][2]);
                    $('#buttonR').html(options[20][3]);
                    break;
                case '42':
                    $('#buttonQ').html(options[21][0]);
                    $('#buttonW').html(options[21][1]);
                    $('#buttonE').html(options[21][2]);
                    $('#buttonR').html(options[21][3]);
                    break;
                case '43':
                    $('#buttonQ').html(options[22][0]);
                    $('#buttonW').html(options[22][1]);
                    $('#buttonE').html(options[22][2]);
                    $('#buttonR').html(options[22][3]);
                    break;
                case '44':
                    $('#buttonQ').html(options[23][0]);
                    $('#buttonW').html(options[23][1]);
                    $('#buttonE').html(options[23][2]);
                    $('#buttonR').html(options[23][3]);
                    break;
                case '45':
                    $('#buttonQ').html(options[5][0]);
                    $('#buttonW').html(options[5][1]);
                    $('#buttonE').html(options[5][2]);
                    $('#buttonR').html(options[5][3]);
                    break;
                case '46':
                    $('#buttonQ').html(options[21][0]);
                    $('#buttonW').html(options[21][1]);
                    $('#buttonE').html(options[21][2]);
                    $('#buttonR').html(options[21][3]);
                    break;
                case '47':
                    $('#buttonQ').html(options[22][0]);
                    $('#buttonW').html(options[22][1]);
                    $('#buttonE').html(options[22][2]);
                    $('#buttonR').html(options[22][3]);
                    break;
                case '48':
                    $('#buttonQ').html(options[5][0]);
                    $('#buttonW').html(options[5][1]);
                    $('#buttonE').html(options[5][2]);
                    $('#buttonR').html(options[5][3]);
                    break;
                // case '49':
                //     $('#buttonQ').html(options[0][0]);
                //     $('#buttonW').html(options[0][1]);
                //     $('#buttonE').html(options[0][2]);
                //     $('#buttonR').html(options[0][3]);
                //     break;
                // case '50':
                //     $('#buttonQ').html(options[0][0]);
                //     $('#buttonW').html(options[0][1]);
                //     $('#buttonE').html(options[0][2]);
                //     $('#buttonR').html(options[0][3]);
                //     break;

            }

        }
    });

});