let nums = [5, 3, 8, 4, 2, 1, 9, 7, 6];

function insertionSort(nums) {
    if (nums.length <= 1) {
        return nums;
    }

    for (let i = 0; i < nums.length; i++) {
        let temp = nums[i];
        let j = i - 1;

        while (j >= 0 && nums[j] > temp) {
            nums[j + 1] = nums[j];
            j--;
        }

        nums[j + 1] = temp;
    }

    return nums;
}

console.log(insertionSort(nums)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]