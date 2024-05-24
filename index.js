function printValue(val) {
    if (document.querySelector(".main-information").innerHTML == "0" && val != ".")
        document.querySelector(".main-information").innerHTML = "";
    if (val == "." && document.querySelector(".main-information").innerHTML.includes("."))
        return;
    document.querySelector(".main-information").innerHTML += val;
    if (document.querySelector(".main-information").innerHTML == "00")
        document.querySelector(".main-information").innerHTML = "0";
}
function main() {
    const buttonsNum = document.querySelectorAll(".number-list > li > button");
    for (button of buttonsNum) {
        const buttonText = button.innerHTML;
        button.onclick = () => printValue(buttonText);
    }

    const buttonsSym = document.querySelectorAll(".symbols-list-1 > li > button");
    for (button of buttonsSym) {
        const buttonText = button.innerHTML;
        button.onclick = () => printValue(buttonText);
    }
    const clearBtn = document.querySelector(".clear-text");
    const miResult = document.querySelector(".main-information");

    clearBtn.addEventListener('click', function () {
        miResult.textContent = '';
        if (miResult.textContent === '') {
            miResult.textContent = '0';
        }
    });
    if (miResult.textContent === '') {
        miResult.textContent = '0';

    }
}

window.onload = main;
