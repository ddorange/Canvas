(function(w){

    'use strict';

    var doc = document,
        fps = 30;

    w.app = {
        
        count: 100,

        init: function() {
            var self = this,
                canvas = doc.getElementById('canvas'),
                i = 0,
                stage;

            if ( !canvas || !canvas.getContext ) {
                return;
            }

            // stageの作成
            stage  = canvas.getContext('2d');
            stage.stageWidth  = canvas.width;
            stage.stageHeight = canvas.height;
            w.stage = stage;

            // create Hotaru
            this.dots = []
            for (; i < this.count; i++) {
                this.dots[i] = new Dot();
                this.dots[i].init();
            }
            
            // loop start
            setInterval(function(){ self.loop(); }, Math.floor(1000 / fps));
        },

        loop: function() {
            this.clear();
            this.render();
        },
        
        render: function() {
            for (var i = 0; i < this.count; i++) {
                this.dots[i].render();
            }
        },
        
        clear: function() {
            w.stage.clearRect( 0, 0, w.stage.stageWidth, w.stage.stageHeight );
        }
    };


    // function handleClick (e) {
    //     var date = new Date(),
    //         arr = [];
    //     arr.push( date.getHours() );
    //     arr.push( date.getMinutes() );
    //     view.callTogether(arr);
    // }

})(window);