
var view = (function(){

    'use strict';

    var dotW = 8,
        dotH = 8,
        dotMargin = 0,
        wNum = 5,
        hNum = 5,
        pixelStr = [wNum][hNum],
        dots = [wNum][hNum],
        tmpX,tmpY,

        lineLenth = 0,
        wPos ,hPos,
        fileName,
        counter = 0,
        maxTectNum = 19,
        moveDotsX = new Array(maxTectNum),
        moveDotsY = new Array(maxTectNum),
        moveDotsNum = 0,
        moveDotsCountr = 0,
        isDown = false,

        i,
        ii,
        len;


    function fileSet (fn, wpos, hpos) {
        wPos = wpos;
        hPos = hpos;
        fileName = fn;

        String lines[] = loadStrings(fileName);
        
        for (i = 0 len = lines.length; i < len; i++) {
              pixelStr[i] = int(split(lines[i],','));
        }
    }




    function render () {
        // body...
    }









    return {
        render: render
    }

})();