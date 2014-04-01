$(function(){
    
    'use strict';

    var doc = document,
        canvas  = doc.getElementById('canvas'),
        // stage   = { stageWidth: canvas.width, stageHeight: canvas.height },
        stage,
        view,
        dots = [],
        i,
        len = 100;

    if ( !canvas || !canvas.getContext ) {
        return false;
    }

    // stageの作成
    stage = canvas.getContext('2d');
    stage.stageWidth  = canvas.width;
    stage.stageHeight = canvas.height;
    window.stage = stage;


    setInterval(function(){ enterFrame(); }, 30);


    for (i=0; i < len; i++) {
        dots[i] = new Dot();
        dots[i].init();
    }


    // view = new Dot();
    // view.init(stage.stageWidth/2, stage.stageHeight/2);
    // view.render();


    function enterFrame() {
        clear();
        render();
    }

    function render() {
        for (i=0; i < len; i++) {
            dots[i].render();
        }
    }

    function clear() {
        stage.clearRect( 0, 0, stage.stageWidth, stage.stageHeight );
    }

    function handleClick (e) {
        var date = new Date(),
            arr = [];
        arr.push( date.getHours() );
        arr.push( date.getMinutes() );
        view.callTogether(arr);
    }

});