// Get display element
const display = document.getElementById('display');

// Function to append values to display
function appendTodisplay(value) {
    console.log('Button clicked:', 
     value); // Debug line
     display.value += value;
    console.log('Display now shows:', display.value);
   // Debug line
    
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to calculate the result
function calculate() {
    try {
    // Replace ^ with ** for exponentiation in JavaScript
    let expression = display.value.replace(/\^/g,'**');

 // Evaluate the expression
let result = eval(expression);

         // Display the result
        display.value = result;
    }catch(error) {
        // If there's an error, display "Error"
        display.value = 'Error';
    }
}

  // Optional: Add keyboard support
document.addEventListener('keydown', function(event) {
 const key = event.key;

 // Numbers and operators
    if ('0123456789+-*/.%'.includes(key)) {
        appendTodisplay(key);
    }
    // Enter or equals for calculation
    else if (key === 'Enter' || key === '=') {
        calculate();
    }
    // Escape or c for clear
    else if (key === 'Escape' || key.toLowerCase() === 'c') {
        clearDisplay();
    }

   // Backspace to delete last character
    else if (key === 'Backspace') {
        display.value .slice(0,-1);
    }
});





