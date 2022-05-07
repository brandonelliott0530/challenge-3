// Assignment Code
var lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz"
var upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numberValue = "0123456789"
var specialChar = "!@#$%^&*()*+,-./:;<=>?@>"
var passwordText = document.getElementById('password')
var generateBtn = document.querySelector('#generate')
var password = ''
var temporary = ''

// Write password to the #password input
function writePassword() {
  var length = prompt("How many characters do you want your password to be? Between 8 and 128 characters.")

  // Prompts error if the requested length is less than 8 or more than 128 characters
  if(length<8 || length > 128 || isNaN(length)) {
    alert("Please enter a number between 8 and 128")
    return writePassword()
  }
  // Asks if the user wants to include lowerCase letters
  var lowerCase = confirm("Would you like to include lowercase letters in your password? Click OK for yes, or cancel for no.")

  if(lowerCase) { 
    temporary += lowerCaseLetter;
  }
  
  // Asks if the user wants to include upperCase letters
  var upperCase = confirm("Would you like to include upperCase letters in your password? Click OK for yes or cancel for no.")
  
  if(upperCase) {
    temporary += upperCaseLetter;
  }

  // Asks if the user wants to include numbers in their password
  var numbers = confirm("Would you like to include numbers in your password? Click OK for yes or cancel for no.")

  if(numbers) {
    temporary += numberValue
  }

  // Asks if the user wants to include special characters in their password
  var special = confirm("Would you like to include special characters in your password? Click OK for yes or cancel for no.")

  if(special) {
    temporary += specialChar
  }
  
  // Genterates pasword according to the user's answers
  for (let i = 0; i < length; i++) {
    password += temporary[Math.floor(Math.random() * temporary.length)]
    
  }

  console.log(temporary)
  
  console.log(password)
  passwordText.value = password;

}  
  
  



 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword)
 
 


