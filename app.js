async function postsByUser(userId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
  console.log(await promise.json());
}

postsByUser(4);
