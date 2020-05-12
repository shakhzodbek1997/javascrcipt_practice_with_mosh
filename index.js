// let x = {value: 10};
// let y = x;
//
// x.value  = 20;

// let obj = {value: 10};
// function increase(obj ) {
//     obj.value++;
// }
//
// increase(obj);
// console.log(obj.value);

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function () {
//         console.log('draw');
//     }
// }
//
// const circle = new Circle(10);
//
// for (let key in circle){
//     if (typeof circle[key] !=='function')
//     console.log(key, circle[key]);
// }
//
// const  keys = Object.keys(circle);
// console.log(keys);
//
// if ('radius' in circle){
//     console.log('Circle has a radius');
// }

/*----------------ABSTRACTION---------------*/
// function Circle(radius) {
//     this.radius = radius;
//
//     let defaultLocation = {x: 0, y: 0};
//
//     this.getDefaultLocation = function(){
//         return defaultLocation;
//     };
//
//     this.draw = function () {
//         console.log('draw');
//     };
//
//     Object.defineProperty(this, 'defaultLocation', {
//         get: function () {
//             return defaultLocation;
//         },
//         set: function (value) {
//             if (!value.x || !value.y)
//                 throw new Error('Invalid location.');
//             defaultLocation = value;
//         }
//     });
// }
//
// const circle = new Circle(10);
// circle.defaultLocation = 1;
// circle.draw();



/*
//-----------Task - Stop Watch-------------------

function StopWatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if (running)
            throw  new Error('Stopwatch has already started!');

        running = true;

        startTime = new Date();
    };

    this.stop = function () {
        if (!running)
           throw new Error('Stopwatch is not started!');

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration += seconds;
    };

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    });
}
*/


// ------------------my Stopwatch JS-----------------


















