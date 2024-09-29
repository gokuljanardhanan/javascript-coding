function arrayLeader(a, n) {
  const out = [];
  let maxFromRight = a[n - 1];
  out.push(maxFromRight);
  for (let i = n - 2; i >= 0; i--) {
    if (a[i] >= maxFromRight) {
      maxFromRight = a[i];
      out.push(a[i]);
    }
  }

  return out.reverse();
}

// Example usage:
console.log(arrayLeader([16, 17, 4, 3, 5, 2], 6)); // Output: [17 5 2]
console.log(arrayLeader([10, 4, 2, 4, 1], 5)); // Output: [10 4 4 1]
console.log(arrayLeader([5, 10, 20, 40], 4)); // Output: [40]
console.log(arrayLeader([30, 10, 10, 5], 4)); // Output: [30 10 10 5]

function arrayLeader1(a, n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    let j = i + 1;
    while (j < n) {
      if (a[j] > a[i]) {
        break;
      }
      j++;
    }
    if (j === n) {
      out.push(a[i]);
    }
  }

  return out;
}

// Example usage:
console.log(arrayLeader1([16, 17, 4, 3, 5, 2], 6)); // Output: [17 5 2]
console.log(arrayLeader1([10, 4, 2, 4, 1], 5)); // Output: [10 4 4 1]
console.log(arrayLeader1([5, 10, 20, 40], 4)); // Output: [40]
console.log(arrayLeader1([30, 10, 10, 5], 4)); // Output: [30 10 10 5]
