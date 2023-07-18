function friend(friends) {
    return friends.filter(name => name.length === 4);
}
console.log(friend(['Abrakham', 'Kata', 'Alex', 'Sindey']))