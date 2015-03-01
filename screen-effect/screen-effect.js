(function(w) {

    'use strict';


    var createScreenEffect = function (overwrite) {
        var _screenEffect,
            _timer,
            _loop,
            _stopLoop;


        _loop = function (func, fps) {
            
            if (!_.isFunction(func) && !_timer) {
                return;
            }

            _timer = setInterval(func, fps);
        };

        _stopLoop = function () {
            console.log('stop');
            clearInterval(_timer);
            _timer = null;
        };

        _screenEffect = {
            
            stage: null,
            stageWidth: 0,
            stageHeight: 0,

            active: true,

            default: {
                duration: 100
            },

            /**
             * 初期化
             */
            init: function (canvas) {
                if ( !canvas || !canvas.getContext ) {
                    return;
                }

                // stageの作成
                this.stage  = canvas.getContext('2d');
                this.stageWidth  = canvas.width;
                this.stageHeight = canvas.height;
            },
            /**
             * フェードアウト
             */
            out: function () {
                var i = 0;

                _loop(_.bind(function () {
                    if (i <= 100) {
                        this.clearStage();
                        this.stage.fillStyle = 'rgba(0, 0, 0, ' + i * 0.01 + ')';
                        this.stage.fillRect(0,0, this.stageWidth, this.stageHeight);
                        i++;
                    } else {
                        _stopLoop();
                    }
                }, this), 10);
            },
            /**
             * 
             */
            squareOut: function (time) {
                var rect = 20,
                    currentRect = 0,
                    x = this.stageWidth / rect,
                    y = this.stageHeight / rect;

                // 描画色を設定する
                this.stage.fillStyle = 'rgba(0, 0, 0, 1.0)';
                
                _loop(_.bind(function () {
                    var i,
                        ii;

                    if (currentRect <= rect) {
                        this.clearStage();
                        for (i = 0; i < x; i++) {
                            for (ii = 0; ii < y; ii++) {
                                this.stage.fillRect(i*rect, ii*rect, currentRect, currentRect);
                            }
                        }
                        currentRect++;
                    } else {
                        _stopLoop();
                    }
                }, this), 20);
            },
            /**
             *
             */
            holeOut: function (time) {
                var x = this.stageWidth / 2,
                    y = this.stageHeight / 2,
                    radius = this.stageHeight / 2,
                    endAngle = Math.PI * 2;

                // 初期状態をスタックに保存する
                this.stage.save();
                
                // 全体を黒で塗りつぶす
                this.stage.fillStyle = 'rgb(0, 0, 0)';
                this.stage.fillRect(0,0, this.stageWidth, this.stageHeight);

                // 円形のマスクを作成する
                this.stage.beginPath();
                this.stage.arc(x, y, radius, 0, endAngle, false);
                this.stage.clip();

                this.clearStage();

                _loop(_.bind(function () {
                    // ステージをクリア
                    this.clearStage();
                    
                    // 全体を黒で塗りつぶす
                    this.stage.fillStyle = 'rgb(0, 0, 0)';
                    this.stage.fillRect(0,0, this.stageWidth, this.stageHeight);
                    
                    if (radius > 0) {
                        // 円形のマスクを作成する
                        this.stage.beginPath();
                        this.stage.arc(x, y, radius, 0, endAngle, false);
                        this.stage.clip();
                        this.clearStage();
                        radius--;
                    } else {
                        // マスクを削除する
                        this.stage.restore();
                        _stopLoop();
                    }
                }, this), 10);
            },

            stop: function () {
                _stopLoop();
            },

            clearStage: function () {
                this.stage.clearRect( 0, 0, this.stageWidth, this.stageHeight );
            }
        };

        return _.extend(_screenEffect, overwrite);
    };

    w.createScreenEffect = createScreenEffect;


})(window);