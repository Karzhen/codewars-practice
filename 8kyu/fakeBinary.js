function fakeBin(x){
    let result = '';
    for (let i = 0; i < x.length; i++) {
        const digit = parseInt(x[i]);
        if (digit < 5) {
            result += '0';
        } else {
            result += '1';
        }
    }
    return result;
}
console.log(fakeBin("ad"));
console.log(fakeBin("Abracadabra"));