let passwordOne = document.getElementById('passwordOne')
let passwordTwo = document.getElementById('passwordTwo')
let passwordThree = document.getElementById('passwordThree')
let passwordFour = document.getElementById('passwordFour')
let passwordLength = 10;



function updateTextInput(val) {
          document.getElementById('textInput').value= "Password Contains: " + val +" characters.";
          passwordLength = val;
        }


function generateRandomPassword(length){
  var charArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()~'
  var passwordCreated = '';
  for(var i = 0; i < length; i++){
    passwordCreated += charArray.charAt(Math.floor(Math.random()*charArray.length));

  }
  return passwordCreated

}


function generatePassword(){
  passwordOne.textContent = generateRandomPassword(passwordLength);
  passwordTwo.textContent = generateRandomPassword(passwordLength);
  passwordThree.textContent = generateRandomPassword(passwordLength);
  passwordFour.textContent = generateRandomPassword(passwordLength);
}
