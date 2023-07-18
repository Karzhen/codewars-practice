function timeForMilkAndCookies(date){
    const month = date.getMonth();
    const day = date.getDate();

    return day === 24 && month === 11;
}
console.log(timeForMilkAndCookies(new Date(2023, 11, 24)))
console.log(timeForMilkAndCookies(new Date(2024, 2, 4)))