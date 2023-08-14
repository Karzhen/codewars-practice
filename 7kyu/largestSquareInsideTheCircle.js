function areaLargestSquare(radius) {
    const single_length = radius * Math.sqrt(2);
    return parseInt(Math.pow(single_length, 2));
}
console.log(areaLargestSquare(7));
console.log(areaLargestSquare(43));