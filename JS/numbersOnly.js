function numbersOnly(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(numbersOnly([1, "apple", -3, "orange", 0.5]));

function removeNumbers(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] != "number") {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

function removeNumbers2(arr) {
    var i = 0;
    while (i < arr.length) {
        if (typeof arr[i] != "number") {
            arr.splice(i, 1);
        } else {
            i++;
        }
    }
    return arr;
}
console.log(removeNumbers(([1, "apple", -3, "orange", 0.5, 55, 56, 57, "blue", "red", "gray", "blue", "red", "gray", 58, "black"])));
console.log(removeNumbers2(([1, "apple", -3, "orange", 0.5, 55, 56, 57, "blue", "red", "gray", "blue", "red", "gray", 58, "black"])));
