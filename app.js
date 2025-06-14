function postsByUser(userId) {
  fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
    console.log(res);
    console.log(userId);
  });
}

postsByUser(4);
