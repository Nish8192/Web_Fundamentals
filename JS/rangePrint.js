function printRange(start, end, step) {
    for (var i = start; i < end; i += step) {
        console.log(i);
    }
}

function printRange(start, end) {
    for (var i = start; i < end; i++) {
        console.log(i);
    }
}
printRange(-10, 10, 2);
printRange(2, 10);
