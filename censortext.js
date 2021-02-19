var censoredWords = ["sad", "mad", "bad"];
var customCensoredWords = [];
function censore(inStr) {
    for (idx in censoredWords) {
        inStr = inStr.replace(censoredWords[idx], "****");
    }
    for (idx in customCensoredWords) {
        inStr = inStr.replace(censoredWords[idx], "****");
    }
    return inStr;
}
function addCensoreWords(word) {
    customCensoredWords.push(word);
}
function getCensoredWords() {
    return censoredWords.concat(customCensoredWords);
}
exports.censore = censore;
exports.addCensoreWords = addCensoreWords;
exports.getCensoredWords = getCensoredWords;