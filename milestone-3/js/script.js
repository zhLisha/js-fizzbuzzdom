/*
- Inserimento colori differenti per ogni categoria di multipli
*/


const containerNumbers = document.querySelector('.container-box');

 // Stampare numeri da 1 a 100
for( let i = 1; i <= 100; i++ ) {

    let numberFuzzAndBuzz = i;
    let colorEvenOrOdd;

    // Differenziare tra i multipli di 3 e 5, solo di 3 e solo di 5
    if( i % 3 ===0 && i % 5 === 0) {
        numberFuzzAndBuzz = 'FizzBuzz';
        colorEvenOrOdd = 'both';
    } else if ( i % 5 === 0) {
        numberFuzzAndBuzz = 'Buzz';
        colorEvenOrOdd = 'multiple5';
    } else if( i % 3 === 0 ) {
        numberFuzzAndBuzz = 'Fizz';
        colorEvenOrOdd = 'multiple3';
    }

    // Inserimento valore nei box nelle li di ul
    // Cambio colore in base ai diversi multipli di milstone-1 
    const boxNumber = `<li class="box flex ${colorEvenOrOdd}"> ${numberFuzzAndBuzz} </li>`;

    // Popolare la nostra ul 
    containerNumbers.innerHTML += boxNumber;
}
