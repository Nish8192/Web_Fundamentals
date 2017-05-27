function whatTimeIsIt(HOUR, MINUTE, PERIOD) {
    var periodStr = "";
    if (PERIOD == "AM") {
        periodStr = " in the morning!";
    } else if (PERIOD == "PM") {
        periodStr = " in the evening!";
    } else {
        periodStr = "invalid time period!";
    }

    var hourStr = "";

    if (MINUTE == 15) {
        hourStr = "It is a quarter past " + HOUR;
    } else if (MINUTE == 30) {
        hourStr = "It is half past " + HOUR;
    } else if (MINUTE == 45) {
        if (HOUR >= 12) {
            HOUR -= 12;
        }
        hourStr = "It is a quarter till " + (HOUR + 1);
    } else if (MINUTE < 30) {
        hourStr = "It is just after " + HOUR;
    } else if (MINUTE > 30) {
        if (HOUR >= 12) {
            HOUR -= 12;
        }
        hourStr = "It is almost " + (HOUR + 1);
    }
    var finalOutput = "";
    finalOutput = hourStr + periodStr;
    if (HOUR == 12 && MINUTE == 0 && PERIOD == "AM") {
        finalOutput = "It is MIDNIGHT!";
    }
    if (HOUR == 12 && MINUTE == 0 && PERIOD == "PM") {
        finalOutput = "It is NOON!";
    }



    console.log(finalOutput);
}

whatTimeIsIt(8, 39, "AM");
