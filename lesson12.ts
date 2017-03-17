let displayCollorSpred = function (message, ...color: string[]) {
    for (let i in color) {
        console.log(color[i]);
    }

}
let color = ['red', 'green', 'blue']
let message = "hello";
displayCollorSpred(message, ...color);
