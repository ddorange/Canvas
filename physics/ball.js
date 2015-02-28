(function(w){

    'use strict';

    var Ball = function(){
        this.init.apply(this, arguments);
    };

    Ball.prototype = {

        init: function(x, y, r) {
            this.x = x || 0;
            this.y = y || 0;
            this.radius = r || 4;
            this.color = 'rgba(255, 255, 255, 1)';
        },

        render: function(){
            stage.fillStyle = this.color;
            stage.beginPath();
            stage.arc( this.x, this.y, this.radius, 0, Math.PI * 2, true );
            stage.fill();
        }
    };


    w.Ball = Ball;

})(window);