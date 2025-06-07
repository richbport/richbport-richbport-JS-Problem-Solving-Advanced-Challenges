const statusRef = document.querySelector(".status")

function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("VIP");
    }, 2000);
  });
}

// .then
// getSubscriptionStatus().then((response) => console.log(response));

// Async/Await
async function main() {
  const status = (await getSubscriptionStatus());
  statusRef.innerHTML = status
}

main();
