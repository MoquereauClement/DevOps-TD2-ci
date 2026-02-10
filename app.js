function add(a, b) {
  return a + b;
}

function getRandomChampion(champions, random = Math.random) {
  const index = Math.floor(random() * champions.length);
  return champions[index];
}

module.exports = { add , getRandomChampion};