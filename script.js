//assignment variables for each character types within arrays
let lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "<", ">", "?", ",", "."];
let AllPossibleChars = [];
let magicUserPassword = "";

let wantsLowerCase;
let wantsNumeric;
let wantsSpecialChar;
let wantsUpperCase;
let passwordLength;

let generateBtn = document.querySelector("#generate");

//event listener for length prompt and comfirmation queries
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;


  function generatePassword() {
    let magicUserPassword = ""

    //restricts user from choosing a numerical value outside of the range of 8-128 and redirects them back to the initial length prompt
    function CharLength() {
      passwordLength = prompt("Enter desired number of characters for password (8-128):");
      // console.log(passwordLength); --->checking if user numerical selection is correct
      if (passwordLength < 8 || passwordLength > 128 || passwordLength == "") {
        alert("Error! Please select character length that is between 8 and 128!");
        CharLength();
      }
    }
    CharLength()

    //if user doesn't select at least one of the character types it redirects them back to the beginning of the queriers
    function youMustChoose() {
      wantsLowerCase = confirm("Do you want to include lowercase characters?");
      wantsNumeric = confirm("Do you want to include numbers?");
      wantsSpecialChar = confirm("Do you want to include special characters?");
      wantsUpperCase = confirm("Do you want to include uppercase characters");
      if (wantsLowerCase == false && wantsUpperCase == false && wantsNumeric == false && wantsSpecialChar == false) {
        alert("Error! Please select at least one character type!");
        youMustChoose();
      }
    }
    youMustChoose();

    //pulling character types from arrays
    if (wantsLowerCase === true) {
      AllPossibleChars = AllPossibleChars.concat(lowercase);
    }

    if (wantsNumeric === true) {
      AllPossibleChars = AllPossibleChars.concat(numeric);
    }
  
    if (wantsSpecialChar === true) {
      AllPossibleChars = AllPossibleChars.concat(specialChar);
    }

    if (wantsUpperCase === true) {
      AllPossibleChars = AllPossibleChars.concat(uppercase);
    }
    //what actually spits out the password
    for (let i = 0; i < passwordLength; i++) {
      magicUserPassword += AllPossibleChars[Math.floor(Math.random() * (AllPossibleChars.length))];
    }
    return magicUserPassword;
  }
}