function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    resolve("VIP");
  });
}
getSubscriptionStatus().then(response => console.log())

async function main() {
  console.log(await getSubscriptionStatus());
}

main();
