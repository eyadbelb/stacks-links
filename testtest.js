// Fibonacci Checker
// Have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.

// Examples:
// Input: 34
// Output: yes

// Input: 54
// Output: no

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

FibonacciChecker = (num) => {
  if (isFib(num) === true) {
    return "YES";
  } else {
    return "NO";
  }
};

console.log(FibonacciChecker(54));
console.log(FibonacciChecker(34));
