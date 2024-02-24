function createCar(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    if (extras.length >= 1) {
        extras.forEach(function (_a) {
            var key = _a[0], value = _a[1];
            car[key] = value;
        });
    }
    return car;
}
var myCar = createCar("Toyota", "Corolla", ["color", "blue"], ["year", 2023], ["sunroof", true]);
console.log(myCar);
