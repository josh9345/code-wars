// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples
// divisors(4)  = 3  // 1, 2, 4
// divisors(5)  = 2  // 1, 5
// divisors(12) = 6  // 1, 2, 3, 4, 6, 12
// divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 1

function getDivisorsCnt(n) {
  let cnt = 1;
  for (let i = 0; i <= n / 2; ++i) if (n % i == 0) ++cnt;
  return cnt;
}
// getDivisorsCnt(4);
// getDivisorsCnt(10);
// getDivisorsCnt(11);
// getDivisorsCnt(54);
