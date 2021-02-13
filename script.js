//assignment variables for each character types within arrays
let lowercase = ["q", "w", "e", "r", "t", "a", "s", "d", "f", "g", "z", "x", "c", "v", "b", "y", "u", "i", "o", "p", "h", "j", "k", "l", "n", "m"];
console.log(lowercase.length);
let uppercase = ["Q", "W", "E", "R", "T", "A", "S", "D", "F", "G", "Z", "X", "C", "V", "B", "Y", "U", "I", "O", "P", "H", "J", "K", "L", "N", "M"];
console.log(uppercase.length);
let numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(numeric.length);
let specialChar = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "[", "]", "{", "}", "|", ";", ":", "'", "<", ">", "?", ",", "." ];
console.log(specialChar.length);
let AllPossibleChars = [];
let wantsLowerCase;
let wantsNumeric;
let wantsSpecialChar;
let wantsUpperCase;
let passwordLength;
let magicUserPassword = ""

let generateBtn = document.querySelector("#generate");

//event listener for length prompt and comfirmation queries
generateBtn.addEventListener("click", writePassword);


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;


function generatePassword() {
  
//restricts user from choosing a numerical value outside of the range of 8-128 and redirects them back to the initial length prompt
  function CharLength () { 
    passwordLength = prompt("Enter desired number of characters for password (8-128):");
    // console.log(passwordLength); checking if user numerical selection is correct
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
  //what actually spits out the password
     for (let i = 0; i < passwordLength; i++) {
       magicUserPassword += AllPossibleChars[Math.floor(Math.random() * (AllPossibleChars.length))];
  
       console.log(Math.floor(Math.random() * (AllPossibleChars.length)));
  
       console.log(magicUserPassword);        
       }
    return magicUserPassword;
}
}