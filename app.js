// const emailRef = document.querySelector(".email");

async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
  console.log(response.json())
}

main()

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.username
//   });