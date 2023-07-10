const nameInput = document.getElementById("inputName");
let cardName = document.querySelector(".frontName");

cardName.textContent = "jane appleseed";

nameInput.addEventListener("input", () => {
  cardName.textContent = nameInput.value;
  if (nameInput.value.length < 1)
    return (cardName.textContent = "jane appleseed");
});
