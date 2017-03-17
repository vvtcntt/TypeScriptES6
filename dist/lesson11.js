var displayCollor = function () {
    var color = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        color[_i] = arguments[_i];
    }
    console.log(color);
};
displayCollor('red');
displayCollor('red', 'green');
displayCollor('red', 'green', 'blue');
