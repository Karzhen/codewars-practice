function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            return year % 400 === 0;
        }
        else {
            return true;
        }
    }
    return false;
}
console.log(isLeapYear(2061))
console.log(isLeapYear(300))
console.log(isLeapYear(2016))