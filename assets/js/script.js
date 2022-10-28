// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment code here

// Generate a random uppercase letter
function getCharUp() {
  // Get a random int between 0 and 25; uppercase chars go from 65 to 90 in character set
  let char = String.fromCharCode(Math.floor(Math.random()*26+65));
  return char;
}

// Generate a random lowercase letter
function getCharLow() {
  // Get a random int between 0 and 25; lowercase chars go from 97 to 122 in character set
  let char = String.fromCharCode(Math.floor(Math.random()*26+97));
  console.log(char);
  return char;
}

// Generte a special character
function getSpecial() {
  let specList = "`~!@#$%^&*()_-+={}[]|\\;:'\"<,>.?/".split("");
  let specIndex = Math.floor(Math.random()*specList.length);
  let char = specList[specIndex];
  return char;
}

// Generate a random int from 0 to 9
function getNum() {
  let num = Math.floor(Math.random()*10);
  return num;
}

// Prompt for password length
function findLen() {
  // Get password length value from user
  let passLen = prompt("Enter a password length between 8 and 128 characters");
  // Verify length is a number between 8 and 128 chars
  if (passLen<8 || passLen>128 || isNaN(passLen)) {
    alert("Password length must be a number between 8 and 128 characters");
    findLen();
  } else {
    alert("Select the remaining password criteria in the following prompts...")
  }

  return passLen;
}

// Prompt for uppercase chars
function findUchar() {
  // Does user want uppercase chars?
  let answer = prompt("Include uppercase letters? \n(Yes/No)").toLowerCase();

  if (answer === "yes") {
    answer = true;
  } else if (answer === "no") {
    answer = false;
  } else {
    alert("Type the word 'Yes' or the word 'No'");
    findUchar();
  }

  return answer;
}


// Testing:
findUchar();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // Reference to the <textarea> that will display the password
  var passwordText = document.querySelector("#password");
  // Update the value if <textarea> to the newly generated password
  passwordText.value = password;
}


