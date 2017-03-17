var _loop_1 = function (i) {
    (function (x) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    })(i);
};
for (var i = 1; i <= 5; i++) {
    _loop_1(i);
}
