const nameInput = document.getElementById("inputName");
const numberInput = document.getElementById("inputNumber");
const cvcInput = document.getElementById("inputSecurity");
const monthInput = document.getElementById("inputMonth");
const yearInput = document.getElementById("inputYear");
let cardCvc = document.querySelector(".security");
let cardMonth = document.querySelector(".cardMonth");
let cardYear = document.querySelector(".cardYear");
let cardName = document.querySelector(".frontName");
let cardNumber = document.querySelector(".frontNumber");
let p = document.createElement("p");
let isError = false;

p.classList.add('error');

cardName.textContent = "jane appleseed";
cardNumber.textContent = "0000 0000 0000 0000";
cardCvc.textContent = "000";
cardMonth.textContent = "00";
cardYear.textContent = "00";

numberInput.addEventListener("input", () => {
  p.textContent = ""
  if (numberInput.value.length > numberInput.maxLength) {
    numberInput.value = numberInput.value.slice(0, numberInput.maxLength);
  }
  cardNumber.textContent = format(numberInput.value);
  
  if (numberInput.value.length < 1) {
    p.textContent = "card number cannot be empty"
    numberInput.after(p.cloneNode(true))
    cardNumber.textContent = "0000 0000 0000 0000";
    isError = true;
    return;
  }
});

nameInput.addEventListener("input", () => {
  const letters = /^[A-Za-z]+$/;
  p.remove()
  if (!nameInput.value.match(letters)) {
    p.textContent = "please only enter letters"
    nameInput.after(p.cloneNode(true))
    return
  }
  cardName.textContent = nameInput.value;
  if (nameInput.value.length < 1) {
    return (cardName.textContent = "jane appleseed");
  }
});

monthInput.addEventListener("input", () => {
  p.textContent = ""
  if (monthInput.value.length > monthInput.maxLength) {
    monthInput.value = monthInput.value.slice(0, monthInput.maxLength);
  }
  cardMonth.textContent = monthInput.value;
  if (monthInput.value.length < 1) {
    cardMonth.textContent = "00";
  }
});

yearInput.addEventListener("input", (e) => {
  if (yearInput.value.length > yearInput.maxLength) {
    yearInput.value = yearInput.value.slice(0, yearInput.maxLength);
  }
  cardYear.textContent = yearInput.value;
  if (yearInput.value.length < 1) {
    cardYear.textContent = "00";
  }
});

cvcInput.addEventListener("input", () => {
  if (cvcInput.value.length > cvcInput.maxLength) {
    cvcInput.value = cvcInput.value.slice(0, cvcInput.maxLength);
  }
  cardCvc.textContent = cvcInput.value;
  if (cvcInput.value.length < 1) {
    cardCvc.textContent = "000";
  }
});

function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}
