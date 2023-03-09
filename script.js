// Assignment Code
var generateBtn = document.querySelector("#generate");

var charsUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y,", "Z"];
var charsLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charsSpecial = ["!", "@", "#", "$", "%", "?", "&", "*", "(", ")", "/"];
var charsNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var charsLength = 8; 128;
var charsArray = [];
var password = "";

// added function and console log to show the button was clicked
function generatePassword() {
  var password = "";
  for(i = 0; i < charsLength; i++);
  var randomChoice = Math.floor(Math.random() * charsArray.length);
  password = password + charsArray[randomChoice];
  return password;
}
console.log("made a password");

// asking how many characters and making sure length falls within the parameters
function getPrompts() {
  
  charsLength = prompt("How many chacters would you like your password to be? (You must choose between 8 and 124!)");
  
  if (isNaN(charsLength) || charsLength < 8 || charsLength > 124) {
    return false;
  }
  if (confirm("Would you like to use special characters?")); {
    charsArray = charsArray.concat(charsSpecial);
  }
  if (confirm("Would you like to use numbers?")); {
    charsArray = charsArray.concat(charsNumber);
  }
  if (confirm("Would you like to use lowercase letters?")); {
    charsArray = charsArray.concat(charsLowercase);
  }
  if (confirm("Would you like to use uppercase letters?")); {
    charsArray = charsArray.concat(charsUppercase);
  }
  return true;
}


// Write password to the #password input
function writePassword() {
  var Prompts = getPrompts();

  if (Prompts) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
