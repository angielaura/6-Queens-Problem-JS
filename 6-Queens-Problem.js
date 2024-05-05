function solveNQueens(n) {
    // Inisialisasi papan catur kosong dalam bentuk array N dimensi
    const board = new Array(n).fill().map(() => new Array(n).fill('.'));
    const result = [];

    // Function untuk mengecek apakah penempatan ratu aman
    function isSafe(row, col) {
        // Cek jika terdapat ratu pada column yang sama
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        
        // Cek diagonal kiri atas
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        
        // Cek diagonal kanan atas
        for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        
        return true;
    }

    // Fungsi untuk menempatkan ratu
    function placeQueens(row) {
        // Base Case : jika seluruh ratu telah ditempatkan, push ke dalam hasil
        if (row === n) {
            result.push(board.map(row => row.join('')));
            return;
        }

        // Tempatkan ratu pada setiap column untuk row saat ini
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                // Menempatkan ratu
                board[row][col] = 'Q';
                // Tempatkan ratu pada row berikutnya
                placeQueens(row + 1);
                // Backtrack dan pindahkan ratu sebelumnya
                board[row][col] = '.';
            }
        }
    }

    // Tempatkan ratu pertama
    placeQueens(0);

    return result;
}

// Driver Code
const n = 6;
const solutions = solveNQueens(n);
console.log(`Solutions for ${n}-Queens problem:`, solutions);
