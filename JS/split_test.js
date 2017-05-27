function split(str, sep, limit) {
    newStr = [], x = 0;
    if (sep == '') {
        for (let i = 0; i < str.length; i++) {
            newStr[i] = str[i];
        }
        return newStr;
    }

    for (var i = 0; i < str.length; i++) {
        sub = '';
        while (str[i] != sep) {
            sub += str[i];
            i++;
        }
        newStr[x] = sub;
        x++;
    }
    if (limit != undefined) {
        newStr.length = limit - 1;
    }
    return newStr;
}

console.log(split('abc,de,fgh,ijk', ',', 2));
