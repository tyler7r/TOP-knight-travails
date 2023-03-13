let allSquares = {};

class Square {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

function assignMoves(square) {
    square.one = new Square(square.x + 1, square.y + 2);
    square.two = new Square(square.x + 1, square.y - 2);
    square.three = new Square(square.x + 2, square.y + 1);
    square.four = new Square(square.x + 2, square.y - 1);
    square.five = new Square(square.x - 1, square.y + 2);
    square.six = new Square(square.x - 1, square.y - 2);
    square.seven = new Square(square.x - 2, square.y + 1);
    square.eight = new Square(square.x - 2, square.y - 1);
    for (let moves in square) {
        if (square[moves].x === undefined || square[moves].y === undefined) {
            continue;
        } else if (square[moves].x > 7 || square[moves].x < 0) {
            square[moves] = null;
        } else if (square[moves].y > 7 || square[moves].y < 0) {
            square[moves] = null;
        }
    }
}

function possibleMoves(square) {
    if (square.x === null || square.y === null) return;
    square.name = `${square.x}${square.y}`;
    // if (allSquares.hasOwnProperty(`${square.name}`)) return console.log(allSquares[`${square.name}`]);
    if (allSquares.hasOwnProperty(`${square.name}`)){
        assignMoves(square);
    } else {
    allSquares[`${square.name}`] = square;
    assignMoves(square);
    }
}

let stack = [];

function createTree(square) {
    if (square === null) return console.log('hello');
    let startSquare = new Square(square.x, square.y);
    // if (possibleMoves(startSquare) === allSquares[`${startx}${starty}`]) return;
    possibleMoves(startSquare);
    console.log(startSquare);

    // if (startSquare.one !== null) {
    //     stack.push(startSquare);
    //     console.log('1'); this.createTree([startSquare.one.x, startSquare.one.y])
    // } else {
    //     let newStart = stack[stack.length - 1];
    //     stack.pop();
    //     this.createTree([newStart.x, newStart.y]);
    // }
    this.createTree(startSquare.one);
    this.createTree(startSquare.two);
    // if (startSquare.two !== null) {console.log('2'); this.createTree([startSquare.two.x, startSquare.two.y])};
    // if (startSquare.three !== null) {this.createTree([startSquare.three.x, startSquare.three.y])};
    // if (startSquare.four !== null) {this.createTree([startSquare.four.x, startSquare.four.y])};
    // if (startSquare.five !== null) {this.createTree([startSquare.five.x, startSquare.five.y])};
    // if (startSquare.six !== null) {this.createTree([startSquare.six.x, startSquare.six.y])};
    // if (startSquare.seven !== null) {this.createTree([startSquare.seven.x, startSquare.seven.y])};
    // if (startSquare.eight !== null) {this.createTree([startSquare.eight.x, startSquare.eight.y])};
    
    return;
}

createTree(new Square());

class Gameboard {

    travail(square, endSquare, stack = []) {
        createTree([square.x, square.y]);
        console.log(square.x);
        console.log(endSquare.x);
        if (square === null) return console.log('hello')
        if (square.x === endSquare.x && square.y === endSquare.y) return console.log('finished');
        if (square.one !== null) {
            this.travail(square.one, endSquare, stack = []); console.log('1');
        }
    }

}

// console.log(allSquares);

// let square = new Square(3, 3);
// let square2 = new Square(4, 3);
// let square3 = new Square(4, 5);
// // square.name = `${square.x}${square.y}`;
// // square2.name = `${square2.x}${square2.y}`;
// // allSquares[`${square.name}`] = square;
// // allSquares[`${square2.name}`] = square2;
// // console.log((Object.values(allSquares)));
// // let square3 = new Square(4, 3);
// // let s4 = new Square(4, 4);
// possibleMoves(square);
// possibleMoves(square2);
// possibleMoves(square3);
// possibleMoves(square.one);
// console.log(square);
let gameboard = new Gameboard([1, 1])

// gameboard.travail(square, square2);
// possibleMoves(square);
// possibleMoves(square2);
// possibleMoves(square3);
// possibleMoves(s4);