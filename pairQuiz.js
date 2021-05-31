function isFib(num) {
  let fibSeq = [0, 1],
    i = 1,
    fibSeqL;
  for (i; i <= num; i = fibSeq[fibSeqL - 1] + fibSeq[fibSeqL]) {
    fibSeq.push(i);
    fibSeqL = fibSeq.length - 1;
  }
  return fibSeq[fibSeqL] === num;
}
fibonacciChecker = (num) => {
  if (isFib(num) === true) {
    return "YES";
  } else {
    return "NO";
  }
};

console.log(isFib(54));
console.log(fibonacciChecker(54));
console.log(fibonacciChecker(34));
