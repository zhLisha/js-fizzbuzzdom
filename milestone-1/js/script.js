/*
- Stampa numeri da 1 a 100 (solo in console)
- Multipli di 3 = Fuzz
- Multipli di 5 = Buzz
- Multipli di entrambi = FuzzBuzz
*/


// Stampare numeri da 1 a 100
for( let i = 1; i <= 100; i++ ) {

    let numberFuzzAndBuzz = i;

    // Differenziare tra i multipli di 3 e 5, solo di 3 e solo di 5
    if( i % 3 ===0 && i % 5 === 0) {
        numberFuzzAndBuzz = 'FizzBuzz'
    } else if ( i % 5 === 0) {
        numberFuzzAndBuzz = 'Buzz';
    } else if( i % 3 === 0 ) {
        numberFuzzAndBuzz = 'Fizz';
    }
}

