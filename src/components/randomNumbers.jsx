function randomNumbers() {
  let min = 1;
  let max = 120;
  let count = 10;
  let unique = new Set();

  while (unique.size < count) {
    let n = Math.floor(Math.random() * (max - min + 1)) + min;
    unique.add(n);
  }

  return Array.from(unique);
}

export default randomNumbers;
