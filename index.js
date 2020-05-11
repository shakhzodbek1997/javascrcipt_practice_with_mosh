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

    let defaultLocation = {x: 0, y: 0};

    this.getDefaultLocation = function(){
        return defaultLocation;
    };

    this.draw = function () {
        console.log('draw');
    };

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location.')
            defaultLocation = value;
        }
    });
}

const circle = new Circle(10);
circle.defaultLocation = 1;
circle.draw();




























