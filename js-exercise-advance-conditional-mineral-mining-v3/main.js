function mineralMining(mineral, miningPower, duration, cost) {
  return null // TODO: replace this
}

console.log(mineralMining('gold', 10, 70, 59)); // Mineral mining at a loss -35.666666666666664
console.log(mineralMining('rock', 10, 70, 40)); // Invalid mineral name
console.log(mineralMining('uranium', 10, 70, 150)); // Mineral mining at a loss -122
console.log(mineralMining('silver', 33, 200, 30)); // Mineral mining profit 168
console.log(mineralMining('titanium', 25, 100, 200)); // Mineral mining at a loss -131.8181818181818
console.log(mineralMining('gold', 1, 100, 15)); // Mineral mining at a loss -11.666666666666666
console.log(mineralMining('titanium', 20, 350, 150)); // Mineral mining at a loss 40.90909090909091

module.exports = mineralMining;
