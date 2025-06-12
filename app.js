document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("myForm");
  let message = document.getElementById("message");

  if (form && message) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      let name = document.getElementById("name").value;
      message.textContent = "Hello: " + name + "!"
    });
  } else {
    if(!form) {
      console.log("Form element does not exist!")
    }
    if(!message) {
      console.log("Message element does not exist!")
    }
  }
});
