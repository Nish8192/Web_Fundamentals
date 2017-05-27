function forAFewBillion(days) {
    var total = 0.01;
    for (var i = 0; i < days; i++) {
        total *= 2;
    }
    console.log("In " + days + " days you make " + total);

}
forAFewBillion(30);

function daysToMake(total) {
    var totalMade = 0.01;
    for (var days = 0; totalMade < total; days++) {
        totalMade *= 2;
    }
    console.log("It would take " + days + " days to make " + total);
}
daysToMake(1000);

daysToMake(Infinity);
