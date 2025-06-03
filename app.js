fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
  response.json().then(data => {
    emailRef.innerHTML = data.email;
  })
})

const emailRef = document.querySelector(".email")
console.log(emailRef)
