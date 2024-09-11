// Get the display input element
const display = document.querySelector('input[name="display"]');

// Function to create a notification/alert
function showNotification(message) {
    // Create the notification div
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Append the notification to the body
    document.body.appendChild(notification);
    
    // Remove the notification after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Function to clear the display
function clearDisplay() {
    if (display.value) {
        display.value = '';
        showNotification('Display cleared!');
    } else {
        showNotification('Display is already empty!');
    }
}

// Function to delete the last character
function deleteLast() {
    if (display.value) {
        display.value = display.value.slice(0, -1);
        showNotification('Last character deleted!');
    } else {
        showNotification('Oops! No number is there to remove.');
    }
}

// Function to append a value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to calculate and display the result
function calculateResult() {
    // Remove spaces with trim():
    if (display.value.trim() === '') {
        display.value = 'undefined';
        showNotification('Please enter some input first!');
    } else {
        try {
            // Replace ^ with ** for exponentiation
            const result = eval(display.value.replace('^', '**'));
            display.value = result;
            showNotification('Calculation successful!');
        } catch (e) {
            display.value = 'Error';
            showNotification('Invalid calculation. Please check your input.');
        }
    }
}

// Attach event listeners to buttons
document.querySelectorAll('input[type="button"]').forEach(button => {
    button.addEventListener('click', function () {
        const value = this.value;
        if (value === 'AC') {
            clearDisplay();
        } else if (value === 'DEL') {
            deleteLast();
        } else if (value === '=') {
            calculateResult();
        } else {
            appendToDisplay(value);
        }
    });
});
