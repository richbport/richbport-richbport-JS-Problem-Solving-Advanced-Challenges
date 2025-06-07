function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    resolve("VIP");
  });
}

async function main() {
  console.log(await getSubscriptionStatus());
}

main();
