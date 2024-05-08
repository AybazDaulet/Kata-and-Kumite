function countValue(array) {
    let value = 0;
    for (let i = 0; i < 4; i++) {
        if (i != 0) {
            value += Number(array[i]) * 256 ** i;
        } else if (i == 0) {
            value += Number(array[i]);
        }

    }
    return value;
}

function ipsBetween(start, end) {
    let array1 = start.split(".").reverse(), array2 = end.split(".").reverse();
    let value1 = countValue(array1), value2 = countValue(array2);
    let difference = value2 - value1;
    return difference;
}

ipsBetween("20.0.0.10", "20.0.1.0");