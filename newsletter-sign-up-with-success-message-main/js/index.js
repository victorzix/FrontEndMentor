let emailInput = document.getElementById("email");
const validRegex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
let validEmail = false;
let thanksPage = document.getElementById("thanksPage");
let formPage = document.getElementById("emailForm");


thanksPage.style.display = "none";
function sendEmail() {
  emailInput.style.outline = "hsl(231, 7%, 60%) 1px solid";
  let email = emailInput.value;
  validate(email)
  changePage(email);
}

function validate(email) {
  if (!validRegex.test(email)) {
    emailInput.style.outline = "red 1px solid";
    validEmail = false;
  } else if (email.length == 0) {
    emailInput.style.outline = "red 1px solid";
    validEmail = false;
  } else {
    validEmail = true;
  }
}


function changePage(email) {
  if (validEmail) {
    thanksMessage.innerHTML = `A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription`;
    formPage.style.display = "none";
    thanksPage.style.display = "flex";
  }
}
function dismiss() {
  formPage.style.display = "block";
  thanksPage.style.display = "none";
  emailInput.value = " ";
}
