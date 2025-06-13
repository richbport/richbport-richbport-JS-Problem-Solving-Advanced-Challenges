document.addEventListener("DOMContentLoaded", function () {
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");

  if (nameInput && emailInput) {
    nameInput.addEventListener("input", function () {
      if (nameInput.value === "") {
        nameError.textContent = "Name is required";
      } else {
        nameError.textContent = "";
      }
    })
    emailInput.addEventListener("input", function () {
      if (emailInput.value === "") {
        emailInput.textContent = "Email is required";
      } else {
        emailInput.textContent = "";
      }
      
    }
  );
  } else {
    if (!nameInput) {
      console.log("Name input does not exist!");
    }
    if (!emailInput) {
      console.log("Email input does not exist!");
    }
  }
});
