(function(w){

    //コンストラクタ
    var Dot = function(){
        this.x = 0;
        this.y = 0;
        this.radius = 5;
        this.color = { red: 100, green: 255, blue: 0, alpha: 100 };

        this.dotNum = 0;
        this.targetPositon = { x: 0, y: 0 };
        this.beforePositon = { x: 0, y: 0 };
        this.nectPositon = { x: 0, y: 0 };
        this.differPosition = { x: 0, y: 0 };
        this.ellipse = { width: 0, height: 0 };

        this.SPEED = 0.005;

        
        // this.bright = random(0,10);
        

        this.targetBright = 10;
        this.diffBright = 0;
        this.brightSpeed = 0.05;
        this.isBright = true;
    };

    //Modelクラスのメソッド定義
    Dot.prototype = {

        init: function (x, y) {
            this.x = x;
            this.y = y;
        },


        render: function(){
            stage.fillStyle = this.COLOR;
            stage.beginPath();
            stage.arc( this.x, this.y, this.radius, 0, Math.PI * 2, true );
            stage.fill();
        },

        _createRGBAColorString: function (obj) {
            
        }
    }


    w.Dot = Dot;

})(window);
