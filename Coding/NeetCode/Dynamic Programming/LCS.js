const lcsDFSBruteForce = (s1, s2) => {
  return lcsDFSBruteForceHelper(s1, s2, 0, 0);
};

const lcsDFSBruteForceHelper = (s1, s2, i1, i2) => {
  if (i1 === s1.length || i2 === s2.length) return 0;

  if (s1[i1] === s2[i2]) {
    return 1 + lcsDFSBruteForceHelper(s1, s2, i1 + 1, i2 + 1);
  } else {
    return Math.max(
      lcsDFSBruteForceHelper(s1, s2, i1 + 1, i2),
      lcsDFSBruteForceHelper(s1, s2, i1, i2 + 1)
    );
  }
};

const lcsDFSBruteForceMemo = (s1, s2) => {
  const cache = Array(s1.length)
    .fill(0)
    .map(() => Array(s2.length).fill(-1));
  return lcsDFSBruteForceHelper(s1, s2, 0, 0, cache);
};

const lcsDFSBruteForceHelperMemo = (s1, s2, i1, i2) => {
  if (i1 === s1.length || i2 === s2.length) return 0;

  if (cache[i1][i2] !== -1) return cache[i1][i2];

  if (s1[i1] === s2[i2]) {
    cache[i1][i2] = 1 + lcsDFSBruteForceHelper(s1, s2, i1 + 1, i2 + 1);
  } else {
    cache[i1][i2] = Math.max(
      lcsDFSBruteForceHelper(s1, s2, i1 + 1, i2),
      lcsDFSBruteForceHelper(s1, s2, i1, i2 + 1)
    );
  }
  return cache[i1][i2];
};

const lcsDFSBottomUp = (s1, s2) => {
  const dp = Array(s1.length + 1)
    .fill(0)
    .map(() => Array(s2.length + 1).fill(0));

  for (let i = 0; i < s1.length; i++) {
    for (j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) {
        dp[i + 1][j + 1] = 1 + dp[i][j];
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }
  return dp[s1.length][s2.length];
};
