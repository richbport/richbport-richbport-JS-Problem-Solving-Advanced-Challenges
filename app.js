document.addEventListener("DOMContentLoaded", function () {
// Get references to the input and output elements
  let input = document.getElementById("myInput");
  let output = document.getElementById("output");

  // Check if the elements exist
  if (input && output) {
    // Add an input event listener tot he input field
    input.addEventListener("input", function () {
      // Update the output text with the value of the input field
      output.textContent = "you typed: " + input.value;
    });
  } else {
    // Log an error if the elements are not found
    if (!input) {
      console.error("Input element not found!");
    }
    if (!output) {
      console.error("Output element not found!")
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let input = document.getElementById("myInput");
  let output = document.getElementById("output");

  if(input && output){
    input.addEventListener("input", function() {
      output.textContent = "You typed " + input.value
    })
  }
});
