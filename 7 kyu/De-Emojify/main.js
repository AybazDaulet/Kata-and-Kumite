function deEmojify(emojiString) {
    if (!emojiString) return '';
    let emojiArray = [":)", ":D", ">(", ">:C", ":/", ":|", ":O", ";)", "^.^", ":("];
    emojiString = emojiString.split(' ');
    emojiString = emojiString.map(emoji => emojiArray.indexOf(emoji));
    let chains = [];
    let chain = '';
    for (let i = 0; i < emojiString.length; i++) {
        if (emojiString[i] == "-1") {
            chains.push(chain);
            chain = '';
            continue;
        }
        chain += String(emojiString[i]);
        if (i == emojiString.length - 1) chains.push(chain);
    }
    emojiString = chains.map(asciiCode => String.fromCharCode(asciiCode));
    emojiString = emojiString.join('');
    return emojiString;

}

console.log(deEmojify(":D :) :/  :D :) :|"));