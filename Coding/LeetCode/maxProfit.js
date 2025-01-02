const maxProfit = (arr) => {
  let min = arr[0];
  let maxProfit = 0;
  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    maxProfit = Math.max(maxProfit, arr[i] - min);
  }
  return maxProfit;
};
/*
 Calculate the maximum profit for a stock trading scenario where you buy on one day and sell on a later day
 */
