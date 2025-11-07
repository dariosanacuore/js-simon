//Genera numeri casuali
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
const risRandomNum = RandomNum.join(" ");

//Output in pagina
let outputRandomNum = "";
const randomNumElem = document.querySelector(".randomnum");

for (let i = 0; i < RandomNum.length; i++) {
    outputRandomNum += "<span>" + RandomNum[i] + "</span>";
}
randomNumElem.innerHTML = outputRandomNum;



let count = 5;
const intervalId = setInterval(function () {
    if (count === 0) {
        randomNumElem.innerHTML = "";
        clearInterval(intervalId);
    } else {
        randomNumElem.innerHTML = outputRandomNum;

    }
    count--;
}, 1000);