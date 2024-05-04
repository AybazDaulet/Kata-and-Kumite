function getBestWord(points, words) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    let bestScore = 0;
    let bestWordIndex = 0;
    for (let word of words) {
        let score = 0;
        for (let letter of word) {
            score += points[alphabet.indexOf(letter)];
        };
        if (bestScore < score) {
            bestScore = score;
            bestWordIndex = words.indexOf(word);
        } else if (score == bestScore && word.length < words[bestWordIndex].length) {bestScore = score;
            bestWordIndex = words.indexOf(word);}}
    return bestWordIndex;
}