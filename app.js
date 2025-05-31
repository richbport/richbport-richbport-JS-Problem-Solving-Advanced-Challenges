function sortLowToHigh(numbers) {
  return numbers.sort((a, b) => {
    return a - b;
});
}

console.log(sortLowToHigh([1, 5, 0, 100000, 2000, 2]));