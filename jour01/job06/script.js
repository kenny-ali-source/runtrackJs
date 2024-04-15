function fizzbuzz(start, end) {
    let resultat = 0;
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resultat += i;
            console.log("Fizzbuzz");
        } else if (i % 3 === 0) {
            resultat += i;
            console.log("Fizz");
        } else if (i % 5 === 0) {
            resultat += i;
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
    return resultat;
}

console.log(fizzbuzz(1, 151));
