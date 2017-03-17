var persons = (function () {
    function persons(name) {
        this.name = name;
        console.log(this.name + " constructor.");
    }
    return persons;
}());
var p = new persons("Thiệp vũ Văn");
