async function firstSixIncomplete() {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

  console.log(await promise.json())

  // const result = await promise.json();

  // const posts = result.filter(element => element.userId === userId)

  // console.log(posts)
}

firstSixIncomplete();
