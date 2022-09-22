const number1 = Math.ceil(Math.random() * 10);
const number2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const formEl = document.getElementById("form");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
    score = 0;
}
questionEl.innerText = ` What is ${number1} multiply by ${number2}?`;
scoreEl.innerText = ` score : ${score}`;
const correctAns = number1 * number2;
formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }


});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}