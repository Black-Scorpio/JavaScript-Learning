// let passwordOne = document.getElementById('passwordOne')
// let passwordTwo = document.getElementById('passwordTwo')
// let passwordThree = document.getElementById('passwordThree')
// let passwordFour = document.getElementById('passwordFour')



function generateRandomPassword(length){
  var charArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()~'
  var passwordCreated = '';
  for(var i = 0; i < length; i++){
    passwordCreated += charArray.charAt(Math.floor(Math.random()*charArray.length));

  }
  return passwordCreated

}

console.log(generateRandomPassword(10));
