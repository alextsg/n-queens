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
  var board = new Board({n: boardSize});
  var temp = [];
  var num = boardSize;
  var toggle = true;
  var search = function (board, numOfTimes) {

    if (numOfTimes === 0) {
      if (toggle){
        for (var k = 0; k < num; k++){
          var temprow = _.clone(board.get(k));
          temp.push(temprow);
        }
        toggle = false;
      }
      return;
    }

    var row = num - numOfTimes;
    for (var col = 0; col < num; col++) {
        board.togglePiece(row, col);
      if (board.hasRowConflictAt(row) || board.hasColConflictAt(col)){
        board.togglePiece(row, col);
      } else {
        if (toggle) {
          search(board, numOfTimes - 1);
          board.togglePiece(row, col);
        } else {
          return;
        }
      }
    }
  };

  search(board, num);
  return temp;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(boardSize) {
  var board = new Board({n: boardSize});
  var num = boardSize;
  var counter = 0;
  var search = function (board, numOfTimes) {
    if (numOfTimes === 0) {
      counter++;
      return;
    }

    var row = num - numOfTimes;
    for (var col = 0; col < num; col++) {
      board.togglePiece(row, col);
      if (!board.hasRowConflictAt(row) && !board.hasColConflictAt(col)){
        search(board, numOfTimes - 1);
      }
      board.togglePiece(row, col);
    }

  };
  search(board, num);
  return counter;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(boardSize) {
  //var solution = undefined; //fixme

  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  //return solution;
  var board = new Board({n: boardSize});
  var temp = [];
  var num = boardSize;
  var toggle = true;
  if (boardSize === 2 || boardSize === 3){
    return board.rows();
  }
  var search = function (board, numOfTimes) {

    if (numOfTimes === 0) {
      if (toggle){
        for (var k = 0; k < num; k++){
          var temprow = _.clone(board.get(k));
          temp.push(temprow);
        }
        toggle = false;
      }
      return;
    }

    var row = num - numOfTimes;
    for (var col = 0; col < num; col++) {
        board.togglePiece(row, col);
      if (board.hasRowConflictAt(row) ||
          board.hasColConflictAt(col) ||
          board.hasMajorDiagonalConflictAt(col-row) ||
          board.hasMinorDiagonalConflictAt(col+row)){
        board.togglePiece(row, col);
      } else {
        if (toggle) {
          search(board, numOfTimes - 1);
          board.togglePiece(row, col);
        } else {
          return;
        }
      }
    }
  };

  search(board, num);
  return temp;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(boardSize) {
  var board = new Board({n: boardSize});
  var num = boardSize;
  var date = new Date();
  var counter = 0;
  if (boardSize === 2 || boardSize === 3){
    return 0;
  }
  var search = function (board, numOfTimes) {
    if (numOfTimes === 0) {
      counter++;
      return;
    }

    var row = num - numOfTimes;
    for (var col = 0; col < num; col++) {
      board.togglePiece(row, col);
      if (board.hasRowConflictAt(row) ||
          board.hasColConflictAt(col) ||
          board.hasMajorDiagonalConflictAt(col-row) ||
          board.hasMinorDiagonalConflictAt(col+row)){
        board.togglePiece(row, col);
      } else {
        search(board, numOfTimes - 1);
        board.togglePiece(row, col);
      }
    }
  };

  search(board, num);
  console.log(new Date() - date);
  return counter;
};
