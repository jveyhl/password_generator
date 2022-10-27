// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here

// Generate a random uppercase letter
function getCharUp() {
  // Get a random int between 1 and 26 (26 letters in alphabet); uppercase chars go from 65 to 122 in character set
  let char = String.fromCharCode(Math.floor(Math.random()*26+65));
  return char;
}

// Generate a random lowercase letter
function getCharLow() {
  // Get a random int between 1 and 26 (26 letters in alphabet); lowercase chars go from 97 to 122 in character set
  let char = String.fromCharCode(Math.floor(Math.random()*26+97));
  return char;
}

// Generate a random int from 0 to 9
function getNum() {
  let num = Math.floor(Math.random()*10);
  return num;
}

console.log(getNum())

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // Reference to the <textarea> that will display the password
  var passwordText = document.querySelector("#password");
  // Update the value if <textarea> to the newly generated password
  passwordText.value = password;
}


