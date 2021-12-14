// Assignment code here
function generatePassword() {
  var desiredLength = 0;
  while (desiredLength < 8 || desiredLength > 128) {
    desiredLength = parseInt(
      prompt("What would you like the password length to be (8-128)?")
    );
    if (desiredLength < 8 || desiredLength > 128) {
      window.alert("Error: password must be between 8 and 128 characters.");
    }
  }

  var wantsUppercase = confirm("Do you want to include uppercase characters?");
  var wantsLowercase = confirm("Do you want to include lowercase characters?");
  var wantsNumeric = confirm("Do you want to include numeric characters?");
  var wantsSpecial = confirm("Do you want special characters?");

  if (wantsUppercase === true) {
    available = available.concat(uppercase);
  }
  if (wantsLowercase === true) {
    available = available.concat(lowercase);
  }
  if (wantsNumeric === true) {
    available = available.concat(numeric);
  }
  if (wantsSpecial === true) {
    available = available.concat(special);
  }

  if (
    wantsUppercase === false &&
    wantsLowercase === false &&
    wantsNumeric === false &&
    wantsSpecial === false
  ) {
    window.alert("Error: you have not chosen a character.");
    generatePassword();
  }

  var password = "";
  var i = 0;
  while (i < desiredLength) {
    password =
      password + available[Math.floor(Math.random() * available.length)];
    i++;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Character Bank

uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
special = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "{",
  "]",
  "}",
];
