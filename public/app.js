const input = document.querySelector("#email");
const btn = document.querySelector("#btn");

btn.addEventListener("click", checkEmail);

function checkEmail(e) {
  e.preventDefault();
  let regex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  if (input.value === "") {
    document.querySelector("#form__email__result").innerHTML =
      "Oops! Please add your email";
    return false;
  } else if (!regex.test(input.value)) {
    document.querySelector("#form__email__result").innerHTML =
      "Oops! Please check your email";
    return false;
  } else {
    document.querySelector("#form__email__result").innerHTML = "";
    return true;
  }
}
