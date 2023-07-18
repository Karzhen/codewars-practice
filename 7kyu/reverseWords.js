function reverseWords(str) {
    const words = str.split(' ');
    const reversedWords = words.map(word => {
        const reversed = word.split('').reverse().join('');
        return reversed;
    });
    const result = reversedWords.join(' ');
    return result;
}
console.log(reverseWords('River never sleeps'));
console.log(reverseWords('I\'ve tried so hard and got so far'));