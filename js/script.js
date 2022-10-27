{
  const welcome = () => {
    console.log(
      "Hej, tu Marek Słowiński :) Witaj na kursie Frontend Developer"
    );
  };

  const inputElement = () => {
    return (element = document.querySelector(".js-inputSum"));
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
    const dollarRate = 4.9569;
    const euroRate = 4.833;
    const poundRate = 5.5886;
    const frankRate = 4.9526;
    
    radioElementDollar.checked === true
      ? currentRateValue(dollarRate)
      : radioElementEuro.checked === true
      ? currentRateValue(euroRate)
      : radioElementPound.checked === true
      ? currentRateValue(poundRate)
      : currentRateValue(frankRate);
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
