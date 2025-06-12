document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("myForm");
  let message = document.getElementById("message");

  if (form && message) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      let name = document.getElementById("name").value;
      message.textContent = "Hello: + " + name + "!"
    });
  } else {
  }
});
