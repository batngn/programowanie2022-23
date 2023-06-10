

function myFunction() {
    let x = document.getElementById("user_name").value;
    let text;
    if (x == "") {
      text = "????? WPISZ SWOJE IMIĘ AAAAAA";
      document.getElementById("demo").innerHTML = text;
    } else {
        text = "";
    }
}
function checkLength(input) {
  var length = input.value.length;
  return length;
}
function check(){
    text = ''
    document.getElementById("demo").innerHTML = text;
}
function validEmail(email){
    var emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailCheck.test(email);
}
function checkEmailValidity() {
    var emailInput = document.getElementById("email_input");
    if (!validEmail(emailInput.value)) {
      alert("Jaja sobie robisz? EMAIL wpisz");
    }
}
function validEmail(email){
  var emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailCheck.test(email);
}

function checkPasswordStrength(password) {
    var strength = 0;
    var passwordLength = password.length;
    var containsUppercase = /[A-Z]/.test(password);
    var containsLowercase = /[a-z]/.test(password);
    var containsNumbers = /\d/.test(password);
    var containsSymbols = /[$@!%*?&]/.test(password);
  
    if (passwordLength >= 8) {
      strength += 1;
    }
    if (containsUppercase) {
      strength += 1;
    }
    if (containsLowercase) {
      strength += 1;
    }
    if (containsNumbers) {
      strength += 1;
    }
    if (containsSymbols) {
      strength += 1;
    }
    if (strength <= 3) {
      return "Chcesz zeby twojego maila włamały się????";
    } else if (strength <= 4) {
      return "OK";
    } else {
      return "OHOHO TO NAZYWAMY SILNY PASSWORD!!!";
    }
}
function checkPassword() {
    var passwordInput = document.getElementById("password_input");
    var passwordStrength = document.getElementById("password_strength");
    var password = passwordInput.value;
    var strength = checkPasswordStrength(password);
    passwordStrength.innerHTML = "Twoje hasło: " + strength;
  }
