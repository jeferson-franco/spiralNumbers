function solution(n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(new Array(n));
    }
    let count = 1;
    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;
    while (rowStart <= rowEnd && colStart <= colEnd) {
        for (let i = colStart; i <= colEnd; i++) {
            result[rowStart][i] = count;
            count++;
        }
        rowStart++;
        for (let i = rowStart; i <= rowEnd; i++) {
            result[i][colEnd] = count;
            count++;
        }
        colEnd--;
        for (let i = colEnd; i >= colStart; i--) {
            result[rowEnd][i] = count;
            count++;
        }
        rowEnd--;
        for (let i = rowEnd; i >= rowStart; i--) {
            result[i][colStart] = count;
            count++;
        }
        colStart++;
    }
    return result;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test spiralNumbers

// alternative solution
