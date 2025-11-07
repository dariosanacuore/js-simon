const RandomNum = [];
const RandomNumUnivoci = [];
for (let i = 0; i < 5; i++) {
    let curRandomNum = Math.floor(Math.random() * 10) + 1;
    RandomNum.push(curRandomNum);
}


for (let i = 0; i < RandomNum.length; i++) {
    let curElem = RandomNum[i];

    let esiste = false;

    for (j = 0; j < RandomNumUnivoci.length; j++) {
        if (RandomNumUnivoci[j] === curElem) {
            esiste = true;
        }
    }


    if (esiste === false) {
        RandomNumUnivoci.push(curElem);
    }
}
console.log(RandomNumUnivoci);


