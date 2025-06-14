async function postsByUser(userId) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

  const result = await promise.json();

  const posts = result.filter(element => element.userId === userId)

  console.log(posts)
}

postsByUser(4);
