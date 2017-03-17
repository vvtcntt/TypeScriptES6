var displayCollorSpred = function (message) {
    var color = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        color[_i - 1] = arguments[_i];
    }
    for (var i in color) {
        console.log(color[i]);
    }
};
var color = ['red', 'green', 'blue'];
var message = "hello";
displayCollorSpred.apply(void 0, [message].concat(color));
