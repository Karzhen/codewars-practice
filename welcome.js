function greet(language) {
    const languages = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    };

    if (language && typeof language === 'string') {
        const greeting = languages[language.toLowerCase()];
        return greeting || languages.english;
    }
    return languages.english;
}
console.log('\'Welcome!\'')
console.log('link: https://www.codewars.com/kata/577ff15ad648a14b780000e7')
console.log(greet('russian'))
console.log(greet('dutch'))
console.log(greet('spanish'))