function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var agree = document.getElementById("agree").checked;
  var nameError = document.getElementById("nameError");
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var agreeError = document.getElementById("agreeError");
  setTimeout(function() { agreeError.style.display='none'},2000);

  nameError.innerHTML = "";
  emailError.innerHTML = "";
  passwordError.innerHTML = "";
  agreeError.innerHTML = "";

  document.getElementById('name').style.borderColor = 'white';
  document.getElementById('email').style.borderColor = 'white';
  document.getElementById('password').style.borderColor = 'white';

  var isValid = true;
  if (name == "") {
    nameError.innerHTML = "Name is required";
    document.getElementById('name').style.borderColor = 'red';
    isValid = false;
  }

  if (email == "") {
    emailError.innerHTML = "Email is required";
    document.getElementById('email').style.borderColor = 'red';
    isValid = false;
  } else if (!isValidEmail(email)) {
    emailError.innerHTML = "Invalid email address";
    document.getElementById('email').style.borderColor = 'red';
    isValid = false;
  }

  if (password == "") {
    passwordError.innerHTML = "Password is required";
    document.getElementById('password').style.borderColor = 'red';
    isValid = false;
  } 
  else if (password.length < 6) {
    passwordError.innerHTML = "Password must be at least 6 characters long";
    document.getElementById('password').style.borderColor = 'red';
    isValid = false;
  }

  if (!agree) {
    agreeError.innerHTML = "You must agree to the terms and conditions";
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  // You can implement your email validation logic here
  return true;
}