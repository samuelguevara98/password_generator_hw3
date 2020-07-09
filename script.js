
// Assignment Code
var generateBtn = document.querySelector("#generate");
var special = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "?", "/"];
var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
var upperCase = [ "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var numbers = [ "1", "2", "3", "4", "5", "6", "7", "8", "9",  "0" ];
var password = "";

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

var passwordCharacters;
var allArrays = [];

function generate() {
    
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
