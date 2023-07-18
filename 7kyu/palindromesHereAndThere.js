function convertPalindromes(numbers) {
    const isItPalindrome = numbers.map(number => {
        const reversedNumber = number.toString().split('').reverse().join('');
        if (reversedNumber == number) {
            return 1;
        }
        else {
            return 0;
        }
    });
    return isItPalindrome;
}
console.log(convertPalindromes([12321, 12313, 808, 313, 46465]))