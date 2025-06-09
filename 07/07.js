document.addEventListener("DOMContentLoaded", function () {
    const buttonA = document.getElementById('button-a');
    const buttonB = document.getElementById('button-b');
    const counterA = document.getElementById('counter-a');
    const counterB = document.getElementById('counter-b');

    buttonA.onclick = function () {
        counterA.innerHTML = Number(counterA.innerHTML) + 1;
    };

    buttonB.onclick = function () {
        counterB.innerHTML = Number(counterB.innerHTML) + 1;
        buttonA.onclick();
    };
});