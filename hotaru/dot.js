(function(w){

    //コンストラクタ
    var Dot = function(){
        this.x = 0;
        this.y = 0;
        this.alpha = 0;
        this.radius = 4;
        this.speed  = 0.005;
        
        // this.color = { red: 100, green: 255, blue: 0, alpha: 100 };
        this.color = 'rgba(100, 255, 0, 0.5)';

        this.nextPositon = { x: 0, y: 0 };
        this.differPosition = { x: 0, y: 0 };

        this.brightFlg = true;
        this.alphaSpeed  = 0.05;
        this.targetAlpha = 1;
        this.diffAlpha   = 0;

    };

    //Modelクラスのメソッド定義
    Dot.prototype = {

        init: function() {
            this.x = Math.random(0, stage.stageWidth);
            this.y = Math.random(0, stage.stageHeight);
            this.alpha = Math.random();
        },

        render: function(){

            this._move();
            this._bright();

            stage.fillStyle = this.color;
            stage.beginPath();
            stage.arc( this.x, this.y, this.radius, 0, Math.PI * 2, true );
            stage.fill();
        },

        _move: function () {
            var w  = stage.stageWidth,
                h  = stage.stageHeight,
                r  = this.radius,
                r2 = r *2;

            this.nextPositon.x += this._random(w/6, -1*w/6);
            this.nextPositon.y += this._random(h/8, -1*h/8);
            this.differPosition.x = (this.nextPositon.x - this.x) * this.speed;
            this.differPosition.y = (this.nextPositon.y - this.y) * this.speed;
            this.x += this.differPosition.x;
            this.y += this.differPosition.y;

            // prevent frame out
            if (this.x > w + r2) {
                this.x = 0;
                this.nextPositon.x = 0;
            }

            if (this.x < 0 - r2) {
                this.x = w;
                this.nextPositon.x = w;
            }

            if(this.y < 0 - r2){
                this.y = h;
                this.nextPositon.y = h;
            }

            if(this.y > h + r2){
                this.y = 0;
                this.nextPositon.y = 0;
            }
        },

        _bright: function () {
            if (this.brightFlg) {
                this.diffAlpha = (this.alpha + this.targetAlpha) * this.alphaSpeed;
                this.alpha += this.diffAlpha;
                if (this.alpha > 0.9) {
                    this.brightFlg = false;
                    this.targetAlpha = 0;
                }
            } else {
                this.diffAlpha = (this.targetAlpha - this.alpha) * this.alphaSpeed;
                this.alpha += this.diffAlpha;
                if(this.alpha < 0.1){
                    this.brightFlg = true;
                    this.targetAlpha = 1;
                }
            }
            this.color = 'rgba(100, 255, 0, ' + this.alpha + ')';
        },

        brightOff: function() {
            this.alpha = 0;
        },


        _createRGBAColorString: function (obj) {
            
        },

        _random: function (min, max) {
            return Math.floor( Math.random() *(max- min) + min );
        }
    }


    w.Dot = Dot;

})(window);
