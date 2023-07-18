function dutyFree(normPrice, discount, hol){
    const result = hol / (normPrice * (discount / 100));
    return Math.floor(result);
}
console.log(dutyFree(12, 50, 1000))