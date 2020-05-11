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
function Circle(radius) {
    this.radius = radius;

    this.defaultLocation = {x: 0, y: 0};

    this.computeOptimumLocation = function (factor) {
        //...
    };

    this.draw = function(){
        this.computeOptimumLocation(0.1);

        console.log('draw');
    };
}

const circle = new Circle(10);
circle.computeOptimumLocation(0.1);
circle.draw();




























