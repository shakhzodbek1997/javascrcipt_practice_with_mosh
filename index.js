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

let ms = 0, s = 0, m = 0;

let timer;

let stopwatchEl = document.querySelector('.stopwatch');
let lapsContainer = document.querySelector('.laps');

function start() {
    if (!timer){
        timer = setInterval(run, 10);
    }

}

function run() {
    stopwatchEl.textContent =  getTimer();
    ms++;
     if (ms === 100){
         ms = 0;
         s++;
    }

    if (s === 60){
        s = 0;
        m++;
    }
}
function pause() {
    stopTimer();
}

function stop() {
    stopTimer();
    m = 0;
    s = 0;
    ms = 0;
    stopwatchEl.textContent = getTimer();
}
function stopTimer() {
     clearInterval(timer);
     timer = false;
}

function getTimer() {
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}

function restart() {
    stop();
    start();
}

function lap() {
    if (timer){
      let li = document.createElement('li');
      li.innerText = getTimer();
      lapsContainer.appendChild(li);
    }
}

function resetLaps() {
    lapsContainer.innerHTML = '';
}

















