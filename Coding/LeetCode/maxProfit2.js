// Company : Paypal
// Topic : Array, Greedy

// Time complexity: O(n)
// Space complexity: O(1)
var maxProfitMultiple = function (prices) {
  let totalProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const profit = prices[i] - prices[i - 1];
    if (profit > 0) {
      totalProfit += profit;
    }
  }

  return totalProfit;
};

/*
Approach:  Greedy
Since we can buy and sell stocks on the same day, we can simply add the profit of each consecutive day if it is positive.
Greedy here means that we are not looking for the maximum profit from the current day to the last day. 
Instead, we are looking for the maximum profit from the current day to the next day.
x, x+3, x+10, Profit = (x+10) - x = 10 = (x+3) - x + (x+10) - (x+3) = 10, 
which means that we can add all the positive profits to get the maximum profit.
*/

/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.
Find and return the maximum profit you can achieve.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.

Example 2:
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.

Example 3:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.
*/
