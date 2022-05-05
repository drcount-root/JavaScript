function maxConsecutiveOnes(nums) {
    let currentCount = 0;
    let heighestCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            currentCount = 0;
        }
        else {
            currentCount++;
        }

        if (currentCount > heighestCount) {
            heighestCount = currentCount;
        }
    }
    return heighestCount;
}

console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1]));