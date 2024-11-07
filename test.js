// const TicTakToe = {
//     board: Array(9).fill(null),
//     currentPlayer: 'X',
//     isGmaeOver: false,


//     init: function () {
//         this.board = Array(9).fill(null),
//             this.currentPlayer = 'X',
//             this.isGmaeOver = false;
//         this.renderBoard();
//         console.log("Game started");
//     },

//     renderBoard: function () {
//         console.clear();
//         console.log(
//             `${this.board[0] || ' '} | ${this.board[1] || ' '} | ${this.board[2] || ' '}\n` +
//             `${this.board[3] || ' '} | ${this.board[4] || ' '} | ${this.board[5] || ' '}\n` +
//             `${this.board[6] || ' '} | ${this.board[7] || ' '} | ${this.board[8] || ' '}\n`
//         );

//     },

//     makeMove: function (position) {
//         if (this.isGmaeOver) {
//             console.log("The game is over");
//             return;
//         }
//         if (position < 0 || position > 8 || this.board[position]) {
//             console.log("Wrong move ");
//             return;
//         }
//         // if(position<0)
//         this.board[position] = this.currentPlayer;
//         this.renderBoard();

//         if (this.checkWinner()) {
//             console.log(`Player ${this.currentPlayer} win`);
//             this.isGmaeOver = true;
//         } else if (this.board.every(cell => cell !== null)) {
//             console.log("Its a tie");
//             this.isGmaeOver = true;
//         } else {
//             this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
//             console.log(` player ${this.currentPlayer} turn`);
//         }
//     },

//     checkWinner: function () {
//         const winningCombo = [
//             [0, 1, 2], [3, 4, 5], [6, 7, 8],
//             [0, 3, 6], [1, 4, 7], [2, 5, 8],
//             [0, 4, 8], [2, 4, 6]
//         ]

//         return winningCombo.some(combo => {
//             const [a, b, c] = combo;
//             return this.board[a] && this.board[a] === this.board[b]
//                 && this.board[a] === this.board[c];
//         })

//     },

//     restart: function () {
//         this.init();
//     }


// }

// TicTakToe.init();
// TicTakToe.makeMove(2);
// TicTakToe.makeMove(1);
// TicTakToe.makeMove(4);
// TicTakToe.makeMove(3);
// TicTakToe.makeMove(2);





function log (value){
console.log(value);
}


function  update (user, newName){
    user.name = newName;
    console.log(user);
}


// log();