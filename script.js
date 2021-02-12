//Assignment variables for each character types
let lowercase = ["q", "w", "e", "r", "t", "a", "s", "d", "f", "g", "z", "x", "c", "v", "b", "y", "u", "i", "o", "p", "h", "j", "k", "l", "n", "m"];
let uppercase = ["Q", "W", "E", "R", "T", "A", "S", "D", "F", "G", "Z", "X", "C", "V", "B", "Y", "U", "I", "O", "P", "H", "J", "K", "L", "N", "M"];
let numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let specialChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "<", ">", "?", ",", "." ];
let AllPossibleChars = [];
let wantsLowerCase;
let wantsNumeric;
let wantsSpecialChar;
let wantsUpperCase;

let generateBtn = document.querySelector("#generate");
console.log("hello!");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Event listener for length prompt query and remaining comfirmation queries follow
generateBtn.addEventListener("click", writePassword);

//restricts user from choosing a numerical value outside of the range of 8-128
function writePassword() {
  let passwordLength;
  function CharLength () {
      passwordLength = prompt("Enter desired number of characters for password (8-128):");
  if (passwordLength < 8 || passwordLength > 128 || passwordLength == "") {
  alert("Error! Please select character length that is between 8 and 128!");
    CharLength();
  } 
}
CharLength()
//forces user to select at least one of the character types
function youMustChoose() {
  wantsLowerCase = confirm("Do you want to include lowercase characters?");
  wantsNumeric = confirm("Do you want to include numbers?");
  wantsSpecialChar = confirm("Do you want to include special characters?");
  wantsUpperCase = confirm("Do you want to include uppercase characters");
  if (wantsLowerCase == false && wantsUpperCase == false && wantsNumeric == false && wantsSpecialChar == false){
  alert("Error! Please select at least one character type!");
  youMustChoose();
  }
}
youMustChoose();

//pulling character types from arrays (currently viewable in inspect console)
if (wantsLowerCase) {
  AllPossibleChars += lowercase;
  console.log(AllPossibleChars);
}
if (wantsNumeric) {
  AllPossibleChars += numeric;
  console.log(AllPossibleChars);
}
if (wantsSpecialChar) {
  AllPossibleChars += specialChar;
  console.log(AllPossibleChars);
}
if (wantsUpperCase) {
  AllPossibleChars += uppercase;
  console.log(AllPossibleChars);
}
}

//This function will be what actually spites out the password
function generatePassword() {
  return "test password"
}


