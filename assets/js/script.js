// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Assignment code here

// Object that will hold all of the char generation functions
const randomFunction = {
  isLowerChars: getCharLow,
  isUpperChars: getCharUp,
  isNums: getNum,
  isSpec: getSpecial,
}

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
  return char;
}

// Generte a special character
function getSpecial() {
  let specList = "`~!@#$%^&*()_-+={}[]|\\;:'\"<,>.?/";
  let specIndex = Math.floor(Math.random()*specList.length);
  let char = specList[specIndex];
  return char;
}

// Generate a random int from 0 to 9 for the numerical password criteria
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
    alert("Select at least one of the remaining password criteria in the following prompts...")
  }
  // Convert the string from the prompt into a number
  passLen = parseInt(passLen);

  return passLen;
}

// Prompt for lowercase chars
function findLchar() {
  // Does user want lowercase chars?
  let answer = prompt("Include lowercase letters? \n(Yes/No)").toLowerCase();

  if (answer === "yes") {
    answer = true;
  } else if (answer === "no") {
    answer = false;
  } else {
    alert("Type the word 'Yes' or the word 'No'");
    findLchar();
  }

  return answer;
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

// Prompt for numbers
function findNum() {
  let answer = prompt("Include numbers? \n(Yes/No)").toLowerCase();

  if (answer === "yes") {
    answer = true;
  } else if (answer === "no") {
    answer = false;
  } else {
    alert("Type the word 'Yes' or the word 'No'");
    findNum();
  }

  return answer;
}

// Prompt for special characters
function findSpec() {
  let answer = prompt("Include special characters? \n(Yes/No)").toLowerCase();

  if (answer === "yes") {
    answer = true;
  } else if (answer === "no") {
    answer = false;
  } else {
    alert("Type the word 'Yes' or the word 'No'");
    findNum();
  }

  return answer;
}

// Generate the password 
function generatePassword() {
  // Define password var
  let password = "";

  // Prompt the user for password criteria and assign answers to vars
  let passwordLength = findLen();
  // These four vars hold booleans
  let isLowerChars = findLchar();
  let isUpperChars = findUchar();
  let isNums = findNum();
  let isSpec = findSpec();

  // Find nuumber of criteria functions that were chosen
  const critCount = isLowerChars+isUpperChars+isNums+isSpec;

  // Array of objects with selected criteria as keys; remove any criteria that are false (not selected by user)
  const critArray = [{isLowerChars}, {isUpperChars}, {isNums}, {isSpec}].filter(item => Object.values(item)[0]);
  
  // Get the keys for the criteria that remain
  let critArrayKeys = [];
  for (let i = 0; i < critArray.length; i++) {
    critArrayKeys.push(Object.keys(critArray[i]));
  }
  // Change the 2D array into a 1 dimensional array
  critArrayKeys = critArrayKeys.flat();

  // Verify at least one char type is selected before proceeding
  if (critCount === 0) {
    alert("At least one of the password criteria must be selected.")
    return;
  }
  
  // Loop over array and call the char generator functions
  for (let i = 0; i < passwordLength; i++) {
    // Get one of the char generator functions randomly
    let funcName = critArrayKeys[Math.floor(Math.random()*critArrayKeys.length)];
    // Use the function to generate a random char
    let randomChar = randomFunction[funcName]();
    // Append the random char to password
    password += randomChar;
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // Reference to the <textarea> that will display the password
  var passwordText = document.querySelector("#password");
  // Update the value if <textarea> to the newly generated password
  passwordText.value = password;
  // passwordText.textContent = password;
}


