# Physics
## Velocity
``` js
var x = 0,
    targetX = 200,
    velocity = 10,
    timer;

timer = setInterval(function(){
    x += velocity;

    if ( x > targetX) {  
        x = targetX;
        console.log('[[-----END----]]');
        clearInterval(timer);
    } else {
        console.log(x); // output
    }
}, 100);
```

## Acceleration
``` js
var x = 0,
    targetX = 200,
    velocity = 10,
    acceleration = 10,
    timer;

timer = setInterval(function(){
    x += velocity;
    velocity += acceleration

    if ( x > targetX) {  
        x = targetX;
        console.log('[[-----END----]]');  
        clearInterval(timer);
    }
    console.log(x); // output
    
}, 100);
```

## Friction
``` js
var x = 0,
    targetX = 200,
    diffX = 0,
    friction = 0.3, // 0 < friction < 1
    timer;

timer = setInterval(function(){
    diffX = (targetX - x) * friction;
    x += diffX;

    if ( Math.abs(diffX) <= 0.1) {  
        x = targetX;
        console.log('[[-----END----]]');  
        clearInterval(timer);
    } else {
        console.log(x); // output
    }
}, 100);
```



