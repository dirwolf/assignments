// Initialize counter value
let counter = 0;

// Function to increment the counter
function incrementCounter() {
  // Increment the counter
  counter++;

  // Log the updated counter value
  console.log(counter);
}

// Call the incrementCounter function every second
setInterval(incrementCounter, 1000);
