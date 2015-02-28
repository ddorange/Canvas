(function(w) {

    'use strict';

    var doc = document,
        fps = 30,
        app;

    app = {
        init: function() {
            var self = this,
                canvas = doc.getElementById('canvas'),
                stage;

            if ( !canvas || !canvas.getContext ) {
                return;
            }

            // stageの作成
            stage  = canvas.getContext('2d');
            stage.stageWidth  = canvas.width;
            stage.stageHeight = canvas.height;
            w.stage = stage;

            // create
            this.ball = new Ball(stage.stageWidth/2, stage.stageHeight/2, 10);
            
            // loop start
            setInterval(function(){ self.loop(); }, Math.floor(1000 / fps));
        },

        loop: function() {
            this.clear();
            this.render();
        },
        
        render: function() {
            this.ball.render();
        },
        
        clear: function() {
            w.stage.clearRect( 0, 0, w.stage.stageWidth, w.stage.stageHeight );
        }
    };

    w.app = w.app || app;
})(window);