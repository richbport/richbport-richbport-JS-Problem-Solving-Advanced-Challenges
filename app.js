function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    resolve("VIP");
  });
}

// .then
getSubscriptionStatus().then(response => console.log(response))


// Async/Await
async function main() {
  console.log(await getSubscriptionStatus());
}

main();
