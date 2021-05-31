const numbers = [
  [1, 2, 3, 4],
  [3, 6, [5, 6], 8, 2, [2, 4], 9],
  [4, 2, [6, 7, [2, 6, 1]]],
];

const calculateSum = (numbers, query) => {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (Array.isArray(numbers[i])) {
      count += calculateSum(numbers[i], query);
      continue;
    }
    count += numbers[i];
  }
  return count;
};
console.log(calculateSum(numbers));
