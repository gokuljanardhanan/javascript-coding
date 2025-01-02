Sliding Window Technique:
This approach involves a dynamic window (subarray, substring) that "slides" across the input to find solutions.

When to Use:
Finding Contiguous Subarrays or Substrings:
Problems that require processing a range of elements continuously.
Examples: Maximum/Minimum sums, Longest substring, or subarray problems.
Fixed or Variable Window Size:
Fixed size: Problems where the window size is given (e.g., sum of k elements).
Variable size: Problems where you need to expand or shrink the window dynamically based on conditions (e.g., smallest subarray with a sum ≥ target).
Optimization Within a Subarray/Substring:
Example: Maximizing the sum or minimizing the length of a subarray.

Examples:

1. Finding Maximum Sum of a Subarray of Size k:
2. Use a fixed window of size k and update the sum while sliding the window.
3. Finding the Longest Substring Without Repeating Characters:
4. Use a variable window, adjusting its boundaries based on the presence of duplicate characters.

Example Problem:
Find the smallest subarray with a sum ≥ target.

function minSubArrayLen(target, nums) {

    let left = 0, sum = 0, minLength = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];
            left++;
        }
    }
    return minLength === Infinity ? 0 : minLength;

}

Complexity:
Time Complexity: O(n)
Space Complexity: O(1)
