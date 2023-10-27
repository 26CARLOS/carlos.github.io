const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

let submitButton = document.querySelector("submit");
let nameInput = document.querySelector("name");
let emailInput = document.querySelector("email");

if (nameInput && emailInput) {
  nameInput.addEventListener("keyup", enableButton);
  emailInput.addEventListener("keyup", enableButton);

  function enableButton() {
    if (nameInput.value.trim() === "" || emailInput.value.trim() === "") {
      submitButton.setAttribute('disabled', 'disabled');
    } else {
      submitButton.removeAttribute('disabled');
    }
  }
}

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.querySelector("#name").value;
  var email = document.querySelector("#email").value;
  var message = document.querySelector("#message").value;

  alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
  console.log("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
});