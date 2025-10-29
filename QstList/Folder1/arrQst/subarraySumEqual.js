function subarraySumEqualsK(nums, k) {
  let sum = 0;
  const prefixSums = new Map();
  prefixSums.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    sum += num;

    console.log(`Step ${i + 1}:`);
    console.log(`  Current number: ${num}`);
    console.log(`  Running sum: ${sum}`);

    if (prefixSums.has(sum - k)) {
      console.log(`  Found a subarray with sum = ${k}`);
      console.log(`  sum - k = ${sum - k} exists in prefixSums`);
      return true;
    }

    prefixSums.set(sum, (prefixSums.get(sum) || 0) + 1);
    console.log(`  Updated prefixSums:`, Object.fromEntries(prefixSums));
    console.log('--------------------------');
  }

  console.log('No subarray found with sum =', k);
  return false;
}

const arr = [1, 2, 3, 4, 5];
const k = 9;
console.log('Result:', subarraySumEqualsK(arr, k));
