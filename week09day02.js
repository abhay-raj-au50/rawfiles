var search = function() {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        mid = Math.floor((l + r) / 2);
        if (target < nums[mid]) {
            r = mid - 1;
        }
        if (target > nums[mid]) {
            l = mid + 1;
        } else {
            return mid;

        }
    }
    return -1;
};
let nums = [-1, 0, 3, 5, 9, 12];
let target = 0;
console.log(search(nums, target))