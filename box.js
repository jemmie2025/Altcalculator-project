// CALCULATOR

// Get display element
const display = document.getElementById('display');

// Function to append values to display
function appendTodisplay(value){
      console.log('Button clicked:, value');//Debug line
      display.value+=value;
      console.log('Display now shows: display.value');// Debug line
}

// Function to clear the display function clearDisplay() {
       display.value='';

}

// Function to calculate the result function calculate() {
   try {
      // Replace ^ with ** for exponentiation in JamvaScript
      let expression = display.value.replace()






