async function postsByUser(userId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

  const result = await promise.json();

  console.log(result)
}

postsByUser(4);
