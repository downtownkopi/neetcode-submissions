class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        // check valid rows
        for (let i = 0; i < 9; i++) {
            const number = {};
            for (let j = 0; j < 9; j++) {
                if (number[board[i][j]]) return false;
                else if (board[i][j] !== '.') number[board[i][j]] = true;
            }
        }

        // check valid columns
        for (let i = 0; i < 9; i++) {
            const number = {};
            for (let j = 0; j < 9; j++) {
                if (number[board[j][i]]) return false;
                else if (board[j][i] !== '.') number[board[j][i]] = true;
            }
        }

        // check valid 3x3
        const number = {};
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (!number[`${Math.floor(i / 3)},${Math.floor(j / 3)}`]) number[`${Math.floor(i / 3)},${Math.floor(j / 3)}`] = {};
                if (number[`${Math.floor(i / 3)},${Math.floor(j / 3)}`][board[i][j]]) return false;
                else if (board[i][j] !== '.') number[`${Math.floor(i / 3)},${Math.floor(j / 3)}`][board[i][j]] = true;
            }
        }

        return true;
    }
}
