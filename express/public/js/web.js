'use strict'
$(document).ready(function() {

    var wW = $(window).width();
    var wH = $(window).height();
    $('#canvas').attr("width", wW);
    $('#canvas').attr("height", wH);
    var init = {
        oX: $('.circle').offset().left,
        oY: $('.circle').offset().top,
        x: $('.circle').width(),
        y: $('.circle').height(),
        r: $('.circle').width() / 2,
        roundX: $('.round').offset().left + $('.round').width() / 2,
        roundY: $('.round').offset().top + $('.round').height() / 2
    };
    var canvas = document.getElementById("canvas");
    console.log(JSON.stringify(init), wW, wH);
    $(document).mousemove(function(e) {
        var x = e.clientX;
        var y = e.clientY;
        var distance = Math.sqrt((x - init.roundX) * (x - init.roundX) + (y - init.roundY) * (y - init.roundY));
        if (distance > 30) {
            distance = 30;
        };
        var rad = Math.atan2(x - init.roundX, y - init.roundY);
        var fixedX = distance * Math.sin(rad);
        var fixedY = distance * Math.cos(rad);
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, wW, wH);
        context.strokeStyle = 'rgb(00,255,255)'; //枠線の色は青
        context.beginPath();
        context.moveTo(init.roundX, init.roundY);
        context.lineTo(init.roundX + fixedX, init.roundY + fixedY);
        context.closePath();
        context.stroke();
        $('.circle').offset({
            left: (fixedX + init.oX),
            top: (fixedY + init.oY)
        });
        
    });

    $(document).mousedown(function(event) {
        console.log("!");
    })

});
