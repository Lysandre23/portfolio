var grid = new Array(9);
var cellSize = 40;

var board = new Array(81);

const width = 9*cellSize;
const height = 9*cellSize;

for(var i=0; i<9; i++) {
    grid[i] = new Array(9);
    for(var j=0; j<9; j++) {
        grid[i][j] = new Cell(i,j);
    }
}

function setup() {
    createCanvas(width,height);
    textSize(cellSize/2);
}

function draw() {
    background(255);
    for(var i=0; i<grid.length; i++) {
        for(var j=0; j<grid[i].length; j++) {
            grid[i][j].draw();
        }
    }
    drawLinesGrid();
}

function mousePressed() {
    if(mouseIn()) {
        let c = scaleGrid(mouseX,mouseY);
        grid[c.a][c.b].turnActive();
        for(var i=0; i<grid.length; i++) {
            for(var j=0; j<grid[i].length; j++) {
                if(!(i == c.a && j == c.b)) {
                    grid[i][j].active = false;
                }
            }
        }
    }
}

function setGrayCellWithMouse() {
    for(var i=0; i<grid.length; i++) {
        for(var j=0; j<grid[i].length; j++) {
            
        }
    }
}

function keyPressed() {
    // 49 -> 1
    // 50 -> 2
    // ...
    for(var i=0; i<grid.length; i++) {
        for(var j=0; j<grid[i].length; j++) {
            if(grid[i][j].active && keyCode > 48 && keyCode < 58) {
                grid[i][j].value = keyCode-48;
            }
        }
    }
}

function drawNumberOfGrid() {
    fill(150);
    noStroke();
    for(var i=0; i<9; i++) {
        for(var j=0; j<9; j++) {
            if(grid[i][j] != 0) {
                text(grid[i][j],(i+0.35)*cellSize,(j+1-0.3)*cellSize);
            }
        }
    }
}

function setColorMouseOnCell() {
    if(mouseIn()) {
        let c = scaleGrid(mouseX,mouseY);
        console.log(c)
        fill(242);
        noStroke();
        rect(c.a*cellSize,c.b*cellSize,cellSize,cellSize);
    }
}

function scaleGrid(x,y) {
    return {
        a: (x-x%cellSize)/cellSize,
        b: (y-y%cellSize)/cellSize
    }
}

function drawLinesGrid() {
    stroke(200);
    strokeWeight(1.5);
    noFill();
    for(var i=1; i<3; i++) {
        line((i*3)*cellSize,0,(i*3)*cellSize,height);
        line(0,(i*3)*cellSize,width,(i*3)*cellSize);
    }
}

function mouseIn() {
    return (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height);
}

function generate() {
    reset();
    let proba = 0.35;
    for(var i=0; i<board.length; i++) {
        if(Math.random() < proba) {
            let value = Math.floor(Math.random()*8+1);
            if(getChoices(board,i).includes(value)) {
                board[i] = value;
                grid[i2rc(i).row][i2rc(i).col].value = value;
            }else{
                i--;
            }
        }
    }
}

function solve1() {
    for(var i=0; i<board.length; i++) {
        board[i] = grid[i2rc(i).row][i2rc(i).col].value;
    }
    coolEffect = 0;
    tries = new Array();
    solve(0);
}

function reset() {
    for(var i=0; i<board.length; i++) {
        board[i] = 0;
        grid[i2rc(i).row][i2rc(i).col].value = 0;
    }
}

/* Resolving Sudoku */

let coolEffect = 0;

let tries = new Array();

function drawTries() {
    console.log(tries.length);
}

// index -> { row, col }
function i2rc(index) {
    return { row: Math.floor(index / 9), col: index % 9 };
}

// { row, col } -> index
function rc2i(row, col) {
    return row * 9 + col;
}

function getChoices(board, index) {
    let choices = [];
    for (let value = 1; value <= 9; ++value) {
        if (acceptable(board, index, value)) {
            choices.push(value);
        }
    }
    return choices;
}

function acceptable(board, index, value) {
    let { row, col } = i2rc(index);

    // if already present on the column, not acceptable
    for (let r = 0; r < 9; ++r)
        if (board[rc2i(r, col)] == value) return false;

    // if already present on the row, not acceptable
    for (let c = 0; c < 9; ++c)
        if (board[rc2i(row, c)] == value) return false;

    // if already present in the same 3x3 square, also not acceptable
    let r1 = Math.floor(row / 3) * 3;
    let c1 = Math.floor(col / 3) * 3;
    for (let r = r1; r < r1 + 3; ++r) {
        for (let c = c1; c < c1 + 3; ++c) {
            if (board[rc2i(r, c)] == value) return false;
        }
    }

    // we have a "go"
    return true;
}

function solve(index) {
    while (index < 81 && board[index]) ++index; // skip non-empty cells
    if (index == 81) {
        console.log(tries.length);
        return true;
    }               // we filled'em all, success!
    let moves = getChoices(board, index);
    for (let m of moves) {
        board[index] = m;              // try one choice
        setTimeout(() => {
            grid[i2rc(index).row][i2rc(index).col].value = m;
            grid[i2rc(index).row][i2rc(index).col].draw();
        },coolEffect*10);
        coolEffect++;
        tries.push({x: i, y: j, value: m});
        if (solve(index + 1))          // if we can solve for the next cell
            return true;               // then return true, success!
    }
    board[index] = 0;  // no move worked; we failed, clear the cell
    return false;      // and backtrack
}