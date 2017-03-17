var getValues = function (values, tax) {
    if (values === void 0) { values = 10; }
    if (tax === void 0) { tax = 20; }
    console.log(values + tax);
    console.log(arguments.length);
};
getValues(undefined, 50);
var getvalues1 = function () { return 10 + 11; };
