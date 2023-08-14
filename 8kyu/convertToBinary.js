function toBinary(n){
    let binary = "";
    while (n > 0) {
        binary = (n % 2) + binary;
        n = Math.floor(n / 2);
    }

    return Number(binary);
}
console.log(toBinary(1242));
console.log(toBinary(82));