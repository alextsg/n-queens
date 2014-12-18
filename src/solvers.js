/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(boardSize) {
  // var solution = undefined; //fixme

  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  // return solution;
  var board = new Board({n: boardSize});
  var boards = [];
  var num = boardSize;
  var counter = 0;
  // console.log(board.rows());
  var search = function (board, numOfTimes) {

    if (numOfTimes === 0) {
      counter++;
      var temp = board.rows().slice(0);//board.rows().concat([]);
      boards.push(temp);
      console.log(boards);
      return;
    }
    for (var i = 0; i < num; i++) {
      for (var j = 0; j < num; j++) {
        // console.log(board);
        if (board.rows()[i][j] === 0) {
          board.togglePiece(i, j);
          // debugger;
          //board.rows()[i][j] = 1;
          console.log(board.rows()[i][j]);
          if (board.hasAnyRowConflicts() || board.hasAnyColConflicts()){
            console.log("hit");
            board.togglePiece(i, j);
          } else {
            console.log(board.rows());
            search(board, numOfTimes - 1);
            board.togglePiece(i, j);
          }
        }
      }
    }
  };
  search(board, num);
  console.log(boards);
  return boards[0];
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
