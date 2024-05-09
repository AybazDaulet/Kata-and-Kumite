function XO(str) {
    let arr1 = str.match(/x/gi), arr2 = str.match(/o/gi);
    return (arr1 && arr1.length) === (arr2 && arr2.length);
}

