function getSubscriptionStatus() {
  return new Promise((resolve, reject) => {
    resolve("VIP")
  })
}

console.log(getSubscriptionStatus())