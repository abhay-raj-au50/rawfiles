//Question:- https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/submissions/827900494/ 
var countNegatives = function(grid) {
    n = grid.length;
    m = grid[0].length;
    count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] < 0) {
                count++;
            }

        }
    }
    return count;
}