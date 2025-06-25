var username = document.getElementById("name");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var signupBtn = document.getElementById("signupBtn");
var allUsersData = getUserData(); // Defined in storage.js file

signupBtn.addEventListener("click", function () {
  var userData = {
    name: username.value,
    email: email.value,
    pass: pass.value,
  };
  var warningDiv = document.getElementById("warningDiv");
  var successfulDiv = document.getElementById("successfulDiv");
  if (validateInput()) {
    saveUserData(userData); // Also defined in storage.js
    warningDiv.classList.add("d-none");
    successfulDiv.classList.remove("d-none");
  } else {
    successfulDiv.classList.add("d-none");
    warningDiv.classList.remove("d-none");
  }
});

function validateUsername() {
  var reg = /^[\w]{3,10}$/;
  return reg.test(username.value);
}

function validateEmail() {
  var reg = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return reg.test(email.value);
}

function validatePass() {
  var reg = /^[\w]{6,15}$/;
  return reg.test(pass.value);
}

function validateInput() {
  var validinput = validateEmail() && validateUsername() && validatePass();
  return validinput;
}