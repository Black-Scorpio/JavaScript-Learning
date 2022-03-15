
let numb = 0
conversionNumber = document.getElementById('conversion-number');
conversionNumber.textContent = numb;



let lengthConversion = document.getElementById('length-conversion')

let volumeConversion = document.getElementById('volume-conversion')

let massConversion = document.getElementById('mass-conversion')


function convertLength(){
  let length = (numb * 3.28084).toFixed(3);
  let meters = (numb / 3.281).toFixed(3);
  lengthConversion.textContent = numb +" meters " + length + " feet | " + numb + " feet = " + meters + " meters"
}


function convertVolume(){
  let litresToGallons = (numb / 3.785).toFixed(3);
  let gallonsToLitre = (numb * 3.785).toFixed(3);
  volumeConversion.textContent = numb +" litres " + litresToGallons + " gallons | " + numb + " gallons = " + gallonsToLitre + " litres"
}



function convertMass(){
  let kiloToPound = (numb * 2.205).toFixed(3);
  let poundToKilo = (numb / 2.205 ).toFixed(3);
  massConversion.textContent = numb +" Kilos " + kiloToPound + " pounds | " + numb + " pounds = " + poundToKilo + " kilos"
}

convertLength();
convertVolume();
convertMass();

//adding a button triger on enter key press
var input = document.getElementById('myInput')
input.addEventListener("keyup",function(event){

  if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("myBtn").click();
      }
  });

//on button press of "convert"
function convertNumbers(){
  numb = input.value;
  conversionNumber.textContent = numb;
  convertLength();
  convertVolume();
  convertMass();
}
