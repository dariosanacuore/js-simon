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
const numInput = document.querySelector(".campi-input");
//FORM


const form = document.getElementById("game-form");

for (let i = 0; i < RandomNum.length; i++) {
    outputRandomNum += "<span>" + RandomNum[i] + "</span>";
}
randomNumElem.innerHTML = outputRandomNum;

//form listener
form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log('aaaa');


    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const num3Input = document.getElementById("num3");
    const num4Input = document.getElementById("num4");
    const num5Input = document.getElementById("num5");
    const resultElem = document.getElementById("mostra");


    const num1 = parseInt(num1Input.value.trim());
    const num2 = parseInt(num2Input.value.trim());
    const num3 = parseInt(num3Input.value.trim());
    const num4 = parseInt(num4Input.value.trim());
    const num5 = parseInt(num5Input.value.trim());

    //Elaborazione
    for (let i = 0; i < RandomNum.length; i++) {
        let curRandomNum = RandomNum[i];
        if (curRandomNum === num1 ||
            curRandomNum === num2 ||
            curRandomNum === num3 ||
            curRandomNum === num4 ||
            curRandomNum === num5) {
            resultElem.innerHTML += `Hai indovinato il numero ${curRandomNum}` + " ";
        }
    }




});




let count = 5;
const intervalId = setInterval(function () {
    if (count === 0) {
        numInput.innerHTML = ` <label for="numeri">Inserisci numeri che hai visto:</label>
            <input type="number" id="num1"/>
            <input type="number" id="num2"/>
            <input type="number" id="num3"/>
            <input type="number" id="num4"/>
            <input type="number" id="num5"/>
            <button type="submit">Invia</button>
`
        randomNumElem.innerHTML = "";
        clearInterval(intervalId);
    } else {
        randomNumElem.innerHTML = outputRandomNum;

    }
    count--;
}, 1000);