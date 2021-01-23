$(document).ready(function () {
    var current = 1; //keeps track of the current div
    var height = $(".roles").height(); //the height of the roles div
    var numberDivs = $(".roles").children().length; //the number of children of the roles div
    var first = $(".roles div:nth-child(1)"); //the first div nested in roles div
    setInterval(function () {
        var number = current * -height * 0.11;
        first.css("margin-top", number + "vmin");
        if (current === numberDivs) {
            first.css("margin-top", "0vmin");
            current = 1;
        } else current++;
    }, 1500);
});
