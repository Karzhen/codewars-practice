function isPalindrome(word) {
    const lowerWord = word.toString().toLowerCase()
    const reversedWord = lowerWord.split('').reverse().join('');
    return lowerWord === reversedWord;
}
console.log(isPalindrome(21033112))
console.log(isPalindrome(88124342188))