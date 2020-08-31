function validateSignUpForm() {
  // Variable Declarations
  var signUp_FirstName = document.signUpForm.signUp_FirstName.value;
  var signUp_LastName = document.signUpForm.signUp_LastName.value;
  var signUp_Gender = document.signUpForm.signUp_Gender.value;
  var sigUp_DoB = document.signUpForm.sigUp_DoB.value;
  var signUp_Username = document.signUpForm.signUp_Username.value;
  var signUp_Email = document.signUpForm.signUp_Email.value;
  var signUp_ISDCode = document.signUpForm.signUp_ISDCode.value;
  var signUp_Telephone = document.signUpForm.signUp_Telephone.value;
  var signUp_Password = document.signUpForm.signUp_Password.value;
  var signUp_ConfirmPassword = document.signUpForm.signUp_ConfirmPassword.value;

  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegEx = new RegExp(
    "^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
    "g"
  );
  const telephoneRegEx = /^(\d{3})[-.]?(\d{3})[-.]?(\d{4})*$/;

  // First Name
  if (signUp_FirstName == "") {
    document.getElementById("signUpFirstNameHelper").innerText = "Required!";
    document.getElementById("signUpFirstNameHelper").style.color = "RED";
    document.signUpForm.signUp_FirstName.focus();
    return false;
  } else {
    document.getElementById("signUpFirstNameHelper").innerText = "Good!";
    document.getElementById("signUpFirstNameHelper").style.color = "GREEN";
  }

  // Last Name
  if (signUp_LastName == "") {
    document.getElementById("signUpLastNameHelper").innerText = "Required!";
    document.getElementById("signUpLastNameHelper").style.color = "RED";
    document.signUpForm.signUp_LastName.focus();
    return false;
  } else {
    document.getElementById("signUpLastNameHelper").innerText = "Good!";
    document.getElementById("signUpLastNameHelper").style.color = "GREEN";
  }

  // Gender
  if (signUp_Gender == "") {
    document.getElementById("signUpGenderHelper").innerText = "Required!";
    document.getElementById("signUpGenderHelper").style.color = "RED";
    return false;
  } else {
    document.getElementById("signUpGenderHelper").innerText = "Good!";
    document.getElementById("signUpGenderHelper").style.color = "GREEN";
  }

  // DOB
  if (sigUp_DoB == "") {
    document.getElementById("sigUpDoBHelper").innerText = "Required!";
    document.getElementById("sigUpDoBHelper").style.color = "RED";
    document.signUpForm.sigUp_DoB.focus();
    return false;
  } else {
    document.getElementById("sigUpDoBHelper").innerText = "Good!";
    document.getElementById("sigUpDoBHelper").style.color = "GREEN";
  }

  // Username
  if (signUp_Username == "") {
    document.getElementById("signUpUsernameHelper").innerText = "Required!";
    document.getElementById("signUpUsernameHelper").style.color = "RED";
    document.signUpForm.signUp_Username.focus();
    return false;
  } else {
    document.getElementById("signUpUsernameHelper").innerText = "Good!";
    document.getElementById("signUpUsernameHelper").style.color = "GREEN";
  }

  // Email
  if (signUp_Email == "") {
    document.getElementById("signUpEmailHelper").innerText = "Required!";
    document.getElementById("signUpEmailHelper").style.color = "RED";
    document.signUpForm.signUp_Email.focus();
    return false;
  } else if (!emailRegEx.test(signUp_Email)) {
    document.getElementById("signUpEmailHelper").innerText = "Invalid!";
    document.getElementById("signUpEmailHelper").style.color = "RED";
    document.signUpForm.signUp_Email.select();
    return false;
  } else {
    document.getElementById("signUpEmailHelper").innerText = "Valid!";
    document.getElementById("signUpEmailHelper").style.color = "GREEN";
  }

  // ISD Code
  if (signUp_ISDCode == "") {
    document.getElementById("signUpISDCodeHelper").innerText = "Required!";
    document.getElementById("signUpISDCodeHelper").style.color = "RED";
    document.signUpForm.signUp_ISDCode.select();
    return false;
  } else {
    document.getElementById("signUpISDCodeHelper").innerText = "Good!";
    document.getElementById("signUpISDCodeHelper").style.color = "GREEN";
  }

  // Telephone
  if (signUp_Telephone == "") {
    document.getElementById("signUpTelephoneHelper").innerText = "Required!";
    document.getElementById("signUpTelephoneHelper").style.color = "RED";
    document.signUpForm.signUp_Telephone.focus();
    return false;
  } else if (!telephoneRegEx.test(signUp_Telephone)) {
    document.getElementById("signUpTelephoneHelper").innerText = "Invalid!";
    document.getElementById("signUpTelephoneHelper").style.color = "RED";
    document.signUpForm.signUp_Telephone.select();
  } else {
    document.getElementById("signUpTelephoneHelper").innerText = "Good!";
    document.getElementById("signUpTelephoneHelper").style.color = "GREEN";
  }

  // Password
  if (signUp_Password == "") {
    document.getElementById("signUpPasswordHelper").innerText = "Required!";
    document.getElementById("signUpPasswordHelper").style.color = "RED";
    document.signUpForm.signUp_Password.focus();
    return false;
  } else if (!passwordRegEx.test(signUp_Password)) {
    document.getElementById("signUpPasswordHelper").innerText = "Invalid!";
    document.getElementById("signUpPasswordHelper").style.color = "RED";
    document.signUpForm.signUp_Password.select();
    return false;
  } else if (parseInt(getPasswordScore(signUp_Password)) < 70) {
    document.getElementById("signUpPasswordHelper").innerText =
      "Valid! Improve strength!";
    document.getElementById("signUpPasswordHelper").style.color = "DARKORANGE";
    document.signUpForm.signUp_Password.select();
    return false;
  } else {
    document.getElementById("signUpPasswordHelper").innerText = "Valid!";
    document.getElementById("signUpPasswordHelper").style.color = "GREEN";
  }

  // Confirm Password
  if (signUp_ConfirmPassword == "") {
    document.getElementById("signUpConfirmPasswordHelper").innerText =
      "Required!";
    document.getElementById("signUpConfirmPasswordHelper").style.color = "RED";
    document.signUpForm.signUp_ConfirmPassword.focus();
    return false;
  } else if (signUp_Password != signUp_ConfirmPassword) {
    document.getElementById("signUpConfirmPasswordHelper").innerText =
      "Password and Confirm Password are different!";
    document.getElementById("signUpConfirmPasswordHelper").style.color = "RED";
    document.signUpForm.signUp_ConfirmPassword.select();
    return false;
  } else {
    document.getElementById("signUpConfirmPasswordHelper").innerText = "Valid!";
    document.getElementById("signUpConfirmPasswordHelper").style.color =
      "GREEN";
  }
}

function validateSignInForm() {
  // Variable declarations
  var signIn_Email = document.signInForm.signIn_Email.value;
  var signIn_Password = document.signInForm.signIn_Password.value;

  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passwordRegEx = new RegExp(
    "^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$",
    "g"
  );

  // Email
  if (signIn_Email == "") {
    document.getElementById("signInEmailHelper").innerText = "Required!";
    document.getElementById("signInEmailHelper").style.color = "RED";
    document.signInForm.signIn_Email.focus();
    return false;
  } else if (!emailRegEx.test(signIn_Email)) {
    document.getElementById("signInEmailHelper").innerText = "Invalid!";
    document.getElementById("signInEmailHelper").style.color = "RED";
    document.signInForm.signIn_Email.select();
    return false;
  } else {
    document.getElementById("signInEmailHelper").innerText = "Valid!";
    document.getElementById("signInEmailHelper").style.color = "GREEN";
  }

  // Password
  if (signIn_Password == "") {
    document.getElementById("signInPasswordHelper").innerText = "Required!";
    document.getElementById("signInPasswordHelper").style.color = "RED";
    document.signInForm.signIn_Password.focus();
    return false;
  } else if (!passwordRegEx.test(signIn_Password)) {
    document.getElementById("signInPasswordHelper").innerText = "Invalid!";
    document.getElementById("signInPasswordHelper").style.color = "RED";
    document.signInForm.signIn_Password.select();
    return false;
  } else {
    document.getElementById("signInPasswordHelper").innerText = "Valid!";
    document.getElementById("signInPasswordHelper").style.color = "GREEN";
  }
}

function checkPasswordStrength() {
  var password = document.getElementById("signUpPassword").value;
  var passwordLength = password.length;
  var scorebar = document.getElementById("scorebar");
  var complexity = document.getElementById("complexity");
  if (passwordLength < 8) {
    complexity.innerText = "Minimum 8 characters";
    scorebar.style.width = "0%";
    scorebar.innerText = "0%";
  } else {
    var passwordScore = parseInt(getPasswordScore(password));
    passwordScore = passwordScore <= 100 ? passwordScore : 100;
    scorebar.style.width = passwordScore + "%";
    scorebar.innerText = passwordScore + "%";
    if (passwordScore >= 90) {
      complexity.innerText = "Very Secure";
      scorebar.style.backgroundColor = "FORESTGREEN";
    } else if (passwordScore >= 80) {
      complexity.innerText = "Secure";
      scorebar.style.backgroundColor = "OLIVEDRAB";
    } else if (passwordScore >= 70) {
      complexity.innerText = "Very Strong";
      scorebar.style.backgroundColor = "MEDIUMSEAGREEN";
    } else if (passwordScore >= 60) {
      complexity.innerText = "Strong";
      scorebar.style.backgroundColor = "ORANGE";
    } else if (passwordScore >= 50) {
      complexity.innerText = "Average";
      scorebar.style.backgroundColor = "DARKORANGE";
    } else if (passwordScore >= 40) {
      complexity.innerText = "Weak";
      scorebar.style.backgroundColor = "LIGHTCORAL";
    } else if (passwordScore >= 30) {
      complexity.innerText = "Very Weak";
      scorebar.style.backgroundColor = "TOMATO";
    } else if (passwordScore >= 20) {
      complexity.innerText = "Poor";
      scorebar.style.backgroundColor = "ORANGERED";
    } else if (passwordScore >= 0) {
      complexity.innerText = "Very Poor";
      scorebar.style.backgroundColor = "CRIMSON";
    }
  }
  return false;
}

function getPasswordScore(pass) {
  var score = 0;
  if (!pass) return score;

  // award every unique letter until 5 repetitions
  var letters = new Object();
  for (var i = 0; i < pass.length; i++) {
    letters[pass[i]] = (letters[pass[i]] || 0) + 1;
    score += 5.0 / letters[pass[i]];
  }
  // bonus points for mixing it up
  var variations = {
    digits: /\d/.test(pass),
    lower: /[a-z]/.test(pass),
    upper: /[A-Z]/.test(pass),
    nonWords: /\W/.test(pass),
  };
  variationCount = 0;
  for (var check in variations) {
    variationCount += variations[check] == true ? 1 : 0;
  }
  score += (variationCount - 1) * 10;
  return parseInt(score);
}
