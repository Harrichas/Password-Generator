// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordFinal = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var character = [];

  var passwordFinal = [];

  //array of characters
  var lowerCaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var numberChar = [1,2,3,4,5,6,7,8,9,0];
  var specialChar = ['!','@','#','$','%','^','&','*','_','+','=','.',',','?',];

  //password length prompt 
  var passwordLength = prompt("How many characters do you want your password to be? Choose a number between 8-128.");

  //make pervious length an integer
  var numPassLength = parseInt(passwordLength);

  //make sure the password length is correct
  if(passwordLength > 128 || passwordLength < 8 || !numPassLength) {
    alert("Make sure you entered a NUMBER between 8 and 128. Thank you!");
    return;
  }

  else {
    alert("Your password shall be "+numPassLength+" long.");
}
 
  //ask what the user want to use 
  var lower = confirm("Do you want any lower case characters?");
  var upper = confirm("Do you want any upper case characters?");
  var number = confirm("Do you want any numbers?");
  var special = confirm("Do you want any special characters?");

  //user gives no to all selections forces them to restart
  if(!lower && !upper && !number && !special) {
    alert("You must choose at least on type of character...");
    return;
  }

  //characters add based on user response
  if ( lower ){
    for (var i=0; i<lowerCaseChar.length; i++){
      character.push(lowerCaseChar[i]);
    }
  }

  if ( upper ){
    for (var i=0; i<upperCaseChar.length; i++){
      character.push(upperCaseChar[i]);
    }
  }

  if ( number ){
    for (var i=0; i<numberChar.length; i++){
      character.push(numberChar[i]);
    }
  }

  if ( special ){
    for (var i=0; i<specialChar.length; i++){
      character.push(specialChar[i]);
    }
  }

  //randomize the arrays to form a password

  for (i=0; i<numPassLength; i++) {
    var index = Math.floor(Math.random()*character.length);

    passwordFinal = passwordFinal+character[index];

  }

  var passwordText = document.querySelector("#password");

  passwordText.value = passwordFinal;

}

/*generate password 
give prompts for:
upper (ABCDEFGHIJKLMNOPQRSTUVWXYZ),
lower (abcdefghijklmnopqrstuvwxyz),
number (1234567890),
special (!@#$%^&*_+=.,?),
and length (8-128).

make password based on what user picks.

if prompt for upper = true add upper to password
else if upper = false leave them out
if lower = true add lower to the password
else if lower = false leave it out
if number = true add numbers to the password
else if number = false leave it out
if special = true add special char to password
else if special = false leave it out
if length is <8 || >128 give alert for proper size
else if correct size give password
if no prompts were accepted alert user to select at least one prompt to make a password.*/