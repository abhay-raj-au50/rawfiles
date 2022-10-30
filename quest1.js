nums = [1, 3, 5, 2, 4, 8, 2, 2];
let solve = function(nums) {
    let n = nums.length;
    if (n == 1) console.log(nums);
    let newNums = [];
    for (let i = 0; i < n / 2; i++) {
        if (i % 2 == 0) {
            newNums[i] = min(nums[2 * i + 1], nums[2 * i + 1])
        } else {
            newNums[i] = max[2 * 1], nums[2 * i + 1]
        }
    }
    nums = [...newNums]
}
var minMaxGame = function(nums) {
    let result = soleve(nums);
    console.log(result);
}