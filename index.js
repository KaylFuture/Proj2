function printValue(val) {
  if (
    document.querySelector(".main-information").innerHTML == "0" &&
    val != "."
  )
    document.querySelector(".main-information").innerHTML = "";
  if (
    val == "." &&
    document.querySelector(".main-information").innerHTML.includes(".")
  )
    return;
  document.querySelector(".main-information").innerHTML += val;
  if (document.querySelector(".main-information").innerHTML == "00")
    document.querySelector(".main-information").innerHTML = "0";
}
function main() {
  // let plus = document.querySelector(".plus-text");
  // let minus = document.querySelector(".minus-text");
  // let division = document.querySelector(".division-text");
  // let multiplication = document.querySelector(".multiplication-text");
  const a = document.querySelector(".history-information").textContent;
  console.log(a);
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
  const miHistory = document.querySelector(".history-information");

  if (miResult.textContent === "") {
    miResult.textContent = "0";
  }

  clearBtn.addEventListener("click", function () {
    miResult.textContent = "0";
    miHistory.textContent = "";
    if (miResult.textContent && miHistory.textContent === "") {
      miResult.textContent = "0";
      miHistory.textContent = "";
    }
  });

  document.querySelector(".plus-text").addEventListener("click", function () {
    let a = document.querySelector(".history-information").textContent;
    if (isOperation(a[a.length - 1])) {
      a = a.split("")
      a.pop()
      document.querySelector(".history-information").textContent = a.join("");
    }
    const p1 = document.querySelector(".main-information");
    const p2 = document.querySelector(".history-information");

    p2.textContent += p1.textContent;

    p1.textContent = "0";
    if (p2.textContent === "+") {
      p2.textContent = "";
    }
  });

  document.querySelector(".minus-text").addEventListener("click", function () {
    const p1 = document.querySelector(".main-information");
    const p2 = document.querySelector(".history-information");
    let a = document.querySelector(".history-information").textContent;
    if (isOperation(a[a.length - 1])) {
      a = a.split("")
      a.pop()
      document.querySelector(".history-information").textContent = a.join("");
    }
    p2.textContent += p1.textContent;

    p1.textContent = "0";
  });

  document
    .querySelector(".division-text")
    .addEventListener("click", function () {
      const p1 = document.querySelector(".main-information");
      const p2 = document.querySelector(".history-information");
      let a = document.querySelector(".history-information").textContent;
      if (isOperation(a[a.length - 1])) {
        a = a.split("")
        a.pop()
        document.querySelector(".history-information").textContent = a.join("");
      }
      p2.textContent += p1.textContent;

      p1.textContent = "0";
      if (p2.textContent === "÷") {
        p2.textContent = "";
      }
    });
  document
    .querySelector(".multiplication-text")
    .addEventListener("click", function () {
      const p1 = document.querySelector(".main-information");
      const p2 = document.querySelector(".history-information");
      let a = document.querySelector(".history-information").textContent;
      if (isOperation(a[a.length - 1])) {
        a = a.split("")
        a.pop()
        document.querySelector(".history-information").textContent = a.join("");
      }
      p2.textContent += p1.textContent;

      p1.textContent = "0";
      if (p2.textContent === "×") {
        p2.textContent = "";
      }
    });
  function isOperation(element) {
    switch (element) {
      case "÷":
        return true;
      case "+":
        return true;
      case "-":
        return true;
      case "×":
        return true;

      default:
        return false;
    }
  }
}

window.onload = main;
