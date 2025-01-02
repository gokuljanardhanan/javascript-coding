const knapSackBruteForceUnbounded = (profit, weight, capacity) => {
  return knapSackHelper(0, profit, weight, capacity);
};

const knapSackHelper = (index, profit, weight, capacity) => {
  if (index >= profit.length) return 0;

  let maxProfit = knapSackHelper(index + 1, profit, weight, capacity);

  let newCapacity = capacity - weight[index];
  if (newCapacity >= 0) {
    let profit =
      profit[index] + knapSackHelper(index, profit, weight, newCapacity);
    maxProfit = Math.max(maxProfit, profit);
  }
};

const knapSackMemoUnbounded = (profit, weight, capacity) => {
  let cache = Array(profit.length)
    .fill(0)
    .map(() => Array(capacity + 1).fill(-1));
  return knapSackHelperMemo(0, profit, weight, capacity, cache);
};

const knapSackHelperMemo = (index, profit, weight, capacity, cache) => {
  if (index >= profit.length) return 0;

  if (cache[index][capacity] !== -1) return cache[index][capacity];

  cache[index][capacity] = knapSackHelper(
    index + 1,
    profit,
    weight,
    capacity,
    cache
  );

  let newCapacity = capacity - weight[index];
  if (newCapacity >= 0) {
    let profit =
      profit[index] + knapSackHelper(index, profit, weight, newCapacity, cache);
    cache[index][capacity] = Math.max(cache[index][capacity], profit);
  }
};

const knapSackBottomUp = (profit, weight, capacity) => {
  const dp = Array(profit.length)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 0; i < profit.length; i++) {
    dp[i][0] = 0;
  }

  for (let c = 0; c <= capacity; c++) {
    if (weight[0] <= c) {
      dp[0][c] = profit[0];
    }
  }

  for (let i = 1; i < profit.length; i++) {
    for (let c = 1; c <= capacity; c++) {
      let profit1 = 0;
      if (weight[i] <= c) {
        profit1 = profit[i] + dp[i][c - weight[i]];
      }
      let profit2 = dp[i - 1][c];
      dp[i][c] = Math.max(profit1, profit2);
    }
  }
};
