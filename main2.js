class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Gameboard {

}

class Knight {

}

let gameboard = new Gameboard();
let knight = new Knight();

function makeGameboard() {
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            let square = new Square(i, j);
            gameboard[`square${square.x}${square.y}`] = square;
        }
    }
}

function possibleMoves() { 
    for (let squares in gameboard) {
        let boardSquares = gameboard[squares];
        let xAxis = gameboard[squares].x;
        let yAxis = gameboard[squares].y;
        gameboard[squares].one = gameboard[`square${xAxis + 1}${yAxis + 2}`];
        gameboard[squares].two = gameboard[`square${xAxis + 1}${yAxis - 2}`];
        gameboard[squares].three = gameboard[`square${xAxis + 2}${yAxis + 1}`];
        gameboard[squares].four = gameboard[`square${xAxis + 2}${yAxis - 1}`];
        gameboard[squares].five = gameboard[`square${xAxis - 1}${yAxis + 2}`];
        gameboard[squares].six = gameboard[`square${xAxis - 1}${yAxis - 2}`];
        gameboard[squares].seven = gameboard[`square${xAxis - 2}${yAxis + 1}`];
        gameboard[squares].eight = gameboard[`square${xAxis - 2}${yAxis - 1}`];
        for (let moves in boardSquares) {
            if (boardSquares[moves] === undefined) {
                boardSquares[moves] = null;
            }
        }
    }
}

makeGameboard();
possibleMoves();

function knightMoves([startx, starty], [endx, endy], visitedSquare = [], moveNum = 0, path = []) {
    knight.endSpace = gameboard[`square${endx}${endy}`];
    let startSquare = gameboard[`square${startx}${starty}`];
    if (visitedSquare.includes(startSquare)) {
        if (startSquare.moves <= moveNum) {
            return;
        }
    };
    startSquare.moves = moveNum;
    visitedSquare.push(startSquare);
    if (startx === endx && starty === endy) {
        visitedSquare.push(startSquare);
        knight.moveNum = moveNum;
        return;
    };

    if (startSquare.one) {this.knightMoves([startSquare.one.x, startSquare.one.y], [endx, endy], visitedSquare, moveNum+1, path)};
    if (startSquare.two) {this.knightMoves([startSquare.two.x, startSquare.two.y], [endx, endy], visitedSquare, moveNum+1, path)};
    if (startSquare.three) {this.knightMoves([startSquare.three.x, startSquare.three.y], [endx, endy], visitedSquare, moveNum+1, path)};
    if (startSquare.four) {this.knightMoves([startSquare.four.x, startSquare.four.y], [endx, endy], visitedSquare, moveNum+1, path)};
    if (startSquare.five) {this.knightMoves([startSquare.five.x, startSquare.five.y], [endx, endy], visitedSquare, moveNum+1, path)};
    if (startSquare.six) {this.knightMoves([startSquare.six.x, startSquare.six.y], [endx, endy], visitedSquare, moveNum+1, path)};
    if (startSquare.seven) {this.knightMoves([startSquare.seven.x, startSquare.seven.y], [endx, endy], visitedSquare, moveNum+1, path)};
    if (startSquare.eight) {this.knightMoves([startSquare.eight.x, startSquare.eight.y], [endx, endy], visitedSquare, moveNum+1, path)};

    return;
}

function knightPath([startx, starty], [endx, endy], move = knight.moveNum, path = []) {
    let startSquare = gameboard[`square${startx}${starty}`];
    if (startSquare.moves === move) {
        path[move] = startSquare;
        if (startx === endx && starty === endy) {knight.path = path};
        if (startSquare.one) {this.knightPath([startSquare.one.x, startSquare.one.y], [endx, endy], move-1, path)};
        if (startSquare.two) {this.knightPath([startSquare.two.x, startSquare.two.y], [endx, endy], move-1, path)};
        if (startSquare.three) {this.knightPath([startSquare.three.x, startSquare.three.y], [endx, endy], move-1, path)};
        if (startSquare.four) {this.knightPath([startSquare.four.x, startSquare.four.y], [endx, endy], move-1, path)};
        if (startSquare.five) {this.knightPath([startSquare.five.x, startSquare.five.y], [endx, endy], move-1, path)};
        if (startSquare.six) {this.knightPath([startSquare.six.x, startSquare.six.y], [endx, endy], move-1, path)};
        if (startSquare.seven) {this.knightPath([startSquare.seven.x, startSquare.seven.y], [endx, endy], move-1, path)};
        if (startSquare.eight) {this.knightPath([startSquare.eight.x, startSquare.eight.y], [endx, endy], move-1, path)};
    }
}

function getStartSpace() {
    let startSpace;
    for (const movesAmt in gameboard) {
        if (gameboard[movesAmt].moves === 0) {
            startSpace = gameboard[movesAmt];
        }
    }
    knight.startSpace = startSpace;
}

let i = 0;

function printPath(array) {
    setTimeout(function() {
        if (i === array.length) return;
        let coveredSquare = document.querySelector(`#square${array[i].x}${array[i].y}`);
        if (i === 0) {
            i++;
            printPath(knight.path);
        } else if (i === array.length-1) {
            i++;
            coveredSquare.textContent = `End (${knight.moveNum})`
            printPath(knight.path);
        } else {
            let moveNum = gameboard[`square${array[i].x}${array[i].y}`].moves;
            coveredSquare.classList.add('path');
            coveredSquare.textContent = moveNum;
            i++;
            printPath(knight.path);
        }
    }, 700)
}

const board = document.querySelector('.gameboard');

function createBoard() {
    for (let i = 1; i < 9; i++) {
        let column = document.createElement('div');
        column.setAttribute('id', `column${[i]}`)
        column.classList.add('column');
        board.appendChild(column);
        for (let j = 1; j < 9; j++) {
            const columnSelect = document.querySelector(`#column${[i]}`)
            let cell = document.createElement('div');
            cell.setAttribute('id', `square${[i]}${[j]}`);
            cell.classList.add('cell');
            columnSelect.appendChild(cell);
        }
    }
}

createBoard();

let cells = document.querySelectorAll('.cell');
let columns = document.querySelectorAll('.column');

function colorCells() {
    for (let i = 0; i < cells.length; i++) {
        if ((cells[i].id.slice(6, 7) % 2 !== 0 && cells[i].id.slice(7, 8) % 2 !== 0)
        || (cells[i].id.slice(6, 7) % 2 === 0 && cells[i].id.slice(7, 8) % 2 === 0)) {
            cells[i].classList.add('blacksquare');
        }
    }
}

function addLabels() {
    let container = document.querySelector('.container');
    let rowLabel = document.createElement('div');
    rowLabel.classList.add('rowLabel');
    container.appendChild(rowLabel);
    let columnLabel = document.createElement('div');
    columnLabel.classList.add('columnLabel');
    container.appendChild(columnLabel);

    for (let i = 1; i < 9; i++) {
        let char = 'A'.charCodeAt(0);
        let number = parseInt(char) + parseInt([i-1])
        let box = document.createElement('div');
        box.classList.add(`columnLabel${[i]}`);
        box.textContent = `${String.fromCharCode(number)}`
        columnLabel.appendChild(box);
    }

    for (let i = 1; i < 9; i++) {
        let box = document.createElement('div');
        box.classList.add(`rowLabel${[i]}`);
        rowLabel.appendChild(box);
        box.textContent = [i];
    }
}

let firstClick = false;
let endClick = false;

function boxFunctionality() {
    let startx = 0;
    let starty = 0;
    cells.forEach((square) => {
        square.addEventListener('click', (e) => {
            let squareSelect = gameboard[`${e.target.id}`];
            let clickedSquare = document.querySelector(`#${e.target.id}`);
            if (firstClick === false) {
                firstClick = true;
                clickedSquare.classList.add('clicked');
                clickedSquare.textContent = 'Start'
                startx = parseInt(squareSelect.x);
                starty = parseInt(squareSelect.y);
            } else if (firstClick === true) {
                clickedSquare.classList.add('clicked');
                clickedSquare.textContent = 'End';
                let endx = squareSelect.x;
                let endy = squareSelect.y;
                knightMoves([startx, starty],[endx, endy]);
                getStartSpace();
                knightPath([knight.endSpace.x, knight.endSpace.y], [knight.startSpace.x, knight.startSpace.y]);
                printPath(knight.path);
                endClick = true;
            }
            userI();
        })
    } )
}

function userI() {
    let UI = document.querySelector('.UI');
    let reset = document.createElement('button');
    reset.textContent = 'Reset';
    reset.classList.add('reset');
    if (firstClick === false) {
        UI.textContent = "Click the Knight's Start Square";
    } else if (firstClick === true && endClick === false) {
        UI.textContent = "Click Where to Travail"
        UI.appendChild(reset);
        initializeResetBtn();
    } else if (endClick === true) {
        setTimeout(() => {
            UI.textContent = `It Took ${knight.moveNum} Moves`;
            UI.appendChild(reset);
            initializeResetBtn();
        }, 300);
    }
}

function initializeResetBtn() {
    let btn = document.querySelector('.reset');
    btn.addEventListener('click', () => {
        i = 0;
        firstClick = false;
        endClick = false;
        cells.forEach((cell) => {
            cell.classList.remove('clicked');
            cell.classList.remove('path');
            cell.textContent = '';
            userI();
        });
    })
}

colorCells();
addLabels();
boxFunctionality();
userI();



