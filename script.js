// All passcode criteria
var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.']
var passwordCriteria = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.']
// var randomizedPassword = document.querySelector("#password")
var myBtn = document.getElementById('myButton');
var generateBtn = document.querySelector("#generate");

//user selects length of passcode

var userInfo = parseInt(prompt("What is your desired password length? Must be between 8-128"));

//confirmational prompts to generate passcode

var numbers = confirm ('Do you want numbers in your password?');
var symbols = confirm ('Do you want special characters');
var lowercase = confirm ('Do you want lower case letters?');
var capitalcase = confirm ('Do you want capital letters?');


generateBtn.addEventListener('click', () => {
 
})

// Password Length Function & "if" statements
function passwordLength() {
// if not a number
  if (isNaN(userInfo) === true) {
    alert ("Must enter in a number between 8-128");
    return;
  }

// if less than 8 characters
  if (userInfo < 8) {
    alert ("Password length MUST be a minimum of 8!");
    return;
  }

// if greater than 128 characters
  if (userInfo > 128) {
    alert ("Password length CANNOT exceed 128!");
    return;
  }
//confirmed user prompts

  if (lowercase) {
    passwordCriteria += lowerCasedCharacters;
  }
  
  else {
    alert ("Must click 'OK' to lowercase.")
    return;
  }

  if (capitalcase) {
    passwordCriteria += upperCasedCharacters;
  }

  else {
    alert ("Must click 'OK' to capital case.")
    return;
  }

  if (numbers) {
    passwordCriteria += numberCharacters;
  }

  else {
    alert ("Must click 'OK' to numbers.")
    return;
  }

  if (symbols) {
    passwordCriteria += specialCharacters;
  }

  else {
    alert ("Must click 'OK' to special characters.")
    return;
  }
  

}

function randomizedCriteria (arr) {
  let criteria = arr[Math.floor(Math.random() * arr.length)];
  return criteria;
}

function generate (arr) {
  passwordLength();
  var password = " ";
  for (var i =0; i < userInfo; i++) {
  password += randomizedCriteria(arr);
  }
  return password;
}


var textBox = document.getElementById('password');

generateBtn.onclick = function() {
  var pass = generate(passwordCriteria);
  textBox.textContent = pass;
}







//Version 2 Not used. Save for future reference



// //Generator Functions from https://net-comber.com/charset.html

// function getRandomLower(){
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
// }

// function getRandomUpper(){
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
// }

// function getRandomNumber(){
//   return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
// }

// function getRandomSpecialCharacters(){
//   return String.fromCharCode(Math.floor(Math.random() * 15) + 33)
// }

// function getRandomSpecialCharacters2(){
//   return String.fromCharCode(Math.floor(Math.random() * 7) + 58)
// }











// Version 1 Not used. Save for future reference!






// // Assignment Code
// var numberCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
// var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
// var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
// var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.']
// var passwordCriteria = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.']
// var randomizedPassword = document.querySelector("#password")
// var myBtn = document.getElementById('myButton');
// var generateBtn = document.querySelector("#generate");


// // // var randomizedPassword = function() {
// // //   for (let i = 0; i < upperCasedCharacters.length; i++);
// // //   console.log(upperCasedCharacters);

// //   for (let i = 0; i < lowerCasedCharacters.length; i++);
// //   console.log(lowerCasedCharacters);

// //   for (let i = 0; i < specialCharacters.length; i++);
// //   console.log(specialCharacters)

// // }

// const randomFunctions = {
//   uC: upperCasedCharacters,
//   lC: lowerCasedCharacters,
//   sCC: specialCharacters,
//   nC: numberCharacters
// };

// const minimumNumber = 8;
// const maximumNumber = 128;

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword) 
//   // event.generatePassword(); // COMMENT THIS LINE BACK IN AT THE END. ERRORS OCCUR WHEN NOT COMMENTED OUT

// // do I need an onClick feature???

// generateBtn.addEventListener("click", function(event) {
//   event.preventDefault();
// })

// function getPasswordOptions() {

//   var doYouWantNumbers = prompt ("Do you want numbers in your password?");
//   var passwordNumberLength = prompt ("How many numers in your password");
//   var doYouWantSpecialCharacters = prompt ("Do you want special characters");
//   var doYouWantLowerCase = prompt ("Do you want lower case letters?");
//   var doYouWantCapital = prompt ("Do you want capital letters?");

//   console.log(doYouWantNumbers);
//   console.log(passwordNumberLength);
//   console.log(doYouWantSpecialCharacters);
//   console.log(doYouWantLowerCase);
//   console.log(doYouWantCapital);

//   var passwordOptions = {
//     number: doYouWantNumbers,
//     length: passwordNumberLength,
//     special: doYouWantSpecialCharacters,
//     lowercase: doYouWantLowerCase,
//     capitalcase: doYouWantCapital

//   }
//   return passwordOptions;
// }


// function generatePassword() {
//     var obj = getPasswordOptions();
//     console.log(obj.number);
//     console.log(obj.length);
//     console.log(obj.special);
//     console.log(obj.lowercase);
//     console.log(obj.capitalcase);
//     return ; 

// }

// for (let i = 0; i < passwordCriteria.length; i++);{
//   var n = [Math.floor(Math.random() * passwordCriteria.length)];

//   function numberCharacters() {
//   [Math.floor(Math.random() * numberCharacters.length)];
//   return password
//   }

//   function lowerCasedCharacters() {
//   [Math.floor(Math.random() * lowerCasedCharacters.length)];
//   return password 
//   }

//   function upperCasedCharacters() {
//   [Math.floor(Math.random() * upperCasedCharacters.length)];
//   return password
//   }

//   function specialCharacters() {
//   [Math.floor(Math.random() * specialCharacters.length)];
//   return password
//   }

  
// }


// // var passwordCriteria = function () {

// //   var n = Math.floor(Math.random() * passwordCriteria.length);

// //   }


// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector(password);
//   // passwordText.value = password; // COMMENT THIS LINE BACK IN AT THE END. ERRORS OCCUR WHEN NOT COMMENTED OUT
 
// }


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword) // when event was made; it was not working. Why?
//   // event.generatePassword(); // COMMENT THIS LINE BACK IN AT THE END. ERRORS OCCUR WHEN NOT COMMENTED OUT

// // do I need an onClick feature???

// generateBtn.addEventListener("click", function(event) {
//   event.preventDefault();
// })