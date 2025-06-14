async function firstSixIncomplete(completed) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

  const result = await promise.json();

  const todos = result.filter(element => element.completed !== true)

  console.log(todos[0])
}

firstSixIncomplete(6);
