// Assignment Code
var generateBtn = document.querySelector("#generate");

var charsUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y,", "Z"];
var charsLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var charsSpecial = ["!", "@", "#", "$", "%", "?", "&", "*", "(", ")", "/"];
var charsNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var length = 8;124;
charsArray = []
var password = "";

// added function and console log to show the button was clicked
function generatePassword() {
  console.log("Button Clicked to make password");
  

  return "Password goes here";
}

function getPrompt



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
