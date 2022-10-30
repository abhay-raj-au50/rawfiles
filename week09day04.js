var findPeakElement = function(nums) {
    l = 0;
    r = nums.length - 1;
    while (l <= r) {
        mid = Math.floor((l + r) / 2);
        if ((mid == 0 && nums[mid] > nums[mid + 1]) ||
            (mid == r && nums[mid] > nums[mid - 1]) ||
            (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1])) {
            return mid;
        } else if (nums[mid + 1] > nums[mid]) {
            l = mid + 1;
        } else if (nums[mid - 1] > nums[mid]) {
            r = mid - 1;
        }

    }
    return -1;

};
nums = [1, 5, 6, 3, 10, 12, 16, 9]
console.log(findPeakElement(nums))