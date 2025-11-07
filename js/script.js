const RandomNum = [];

for (let i = 0; i < 5; i++) {
    let newNum = Math.floor(Math.random() * 10) + 1;


    let trovato = false;

    for (let j = 0; j <= RandomNum.length; j++) {
        if (RandomNum[j] === newNum) {
            trovato = true;
        }
    }
    while (trovato === true) {
        newNum = Math.floor(Math.random() * 10) + 1;
        trovato = false;

        for (let j = 0; j <= RandomNum.length; j++) {
            if (RandomNum[j] === newNum) {
                trovato = true;
            }
        }
    }
    RandomNum.push(newNum);
}
console.log(RandomNum);

