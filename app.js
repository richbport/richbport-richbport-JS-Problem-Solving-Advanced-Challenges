document.addEventListener("DOMContentLoaded", function () {
  let button = document.getElementById("myButton");

  if (button) {
    button.addEventListener("click", function () {
      alert("button was clicked!");
    });
  } else {
    console.error("Button element not found!");
  }
});
