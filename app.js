document.addEventListener("DOMContentLoaded", function () {
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");

  if(nameInput && emailInput){

  } else {
    if(!nameInput) {
      console.log("Name input does not exist!")
    }
    if(!emailInput) {
      console.log("Email input does not exist!")
    }
  }
});
