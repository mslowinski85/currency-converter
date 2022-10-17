let inputElement = document.querySelector(".js-sum");
let formElement = document.querySelector(".js-form");
let inputElementCurrentRate = document.querySelector(".js-currentRate");
let radioElementDollar = document.querySelector(".js-dollar");
let radioElementEuro = document.querySelector(".js-euro");
let radioElementPound = document.querySelector(".js-pound");
let radioElementFrank = document.querySelector(".js-frank");
let inputElementFinallySum = document.querySelector(".js-finallySum");

formElement.addEventListener("input", () => {
  if (inputElement.value >= 0) {
    if (radioElementDollar.checked === true) {
      let dollarRate = 4.9569;
      inputElementCurrentRate.value = dollarRate;
      let finallySum = dollarRate * inputElement.value;
      inputElementFinallySum.value = `${finallySum.toFixed(2)} zł`;
    } else if (radioElementEuro.checked === true) {
      let euroRate = 4.833;
      inputElementCurrentRate.value = euroRate;
      let finallySum = euroRate * inputElement.value;
      inputElementFinallySum.value = `${finallySum.toFixed(2)} zł`;
    } else if (radioElementPound.checked === true) {
      let poundRate = 5.5886;
      inputElementCurrentRate.value = poundRate;
      let finallySum = poundRate * inputElement.value;
      inputElementFinallySum.value = `${finallySum.toFixed(2)} zł`;
    } else {
      let frankRate = 4.9526;
      inputElementCurrentRate.value = frankRate;
      let finallySum = frankRate * inputElement.value;
      inputElementFinallySum.value = `${finallySum.toFixed(2)} zł`;
    }
  } else {
    inputElement.value = "";
  }
});
