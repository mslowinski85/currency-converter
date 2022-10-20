{
  const welcome = () => {
    console.log(
      "Hej, tu Marek Słowiński :) Witaj na kursie Frontend Developer"
    );
  };

  const inputElement = () => {
    return (element = document.querySelector(".js-sum"));
  };

  const updateResultInput = (finallySum) => {
    const inputElementFinallySum = document.querySelector(".js-finallySum");
    inputElementFinallySum.value = `${finallySum.toFixed(2)} zł`;
  };
  
  const currentRateValue = (choosingRate) => {
    const inputElementCurrentRate = document.querySelector(".js-currentRate");
    const finallySum = choosingRate * inputElement().value;

    inputElementCurrentRate.value = choosingRate;
    updateResultInput(finallySum);
  };

  const radioElementChecked = () => {
    const radioElementDollar = document.querySelector(".js-dollar");
    const radioElementEuro = document.querySelector(".js-euro");
    const radioElementPound = document.querySelector(".js-pound");

    if (radioElementDollar.checked === true) {
      const dollarRate = 4.9569;
      currentRateValue(dollarRate);
    } else if (radioElementEuro.checked === true) {
      const euroRate = 4.833;
      currentRateValue(euroRate);
    } else if (radioElementPound.checked === true) {
      const poundRate = 5.5886;
      currentRateValue(poundRate);
    } else {
      const frankRate = 4.9526;
      currentRateValue(frankRate);
    }
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    welcome();
    inputElement();
    formElement.addEventListener("input", () => {
      if (inputElement().value >= 0) {
        radioElementChecked();
      } else {
        inputElement().value = "";
      }
    });
  };

  init();
}
