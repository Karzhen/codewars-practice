function duplicateEncode(word){
    const lowerCaseWord = word.toLowerCase();
    const charFrequences = {};

    for (let i = 0; i < lowerCaseWord.length; i++) {
        const char = lowerCaseWord[i];
        charFrequences[char] = (charFrequences[char] || 0) + 1;
    }

    let result = '';
    for (let i = 0; i < lowerCaseWord.length; i++) {
        const char = lowerCaseWord[i];
        if (charFrequences[char] > 1) {
            result += ')';
        }
        else {
            result += '(';
        }
    }
    return result;
}
console.log(duplicateEncode("1af022"))
console.log(duplicateEncode("happy New Year! Happy holidays!!!"))