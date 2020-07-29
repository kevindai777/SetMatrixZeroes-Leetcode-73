//Objective is to make any column/row containing a '0' all 0's

let matrix = 
[[0,1,2,0],
 [3,4,5,2],
 [1,3,1,5]]


//O(n) solution using a stack to hold all coordinates that have 0's

let stack = []
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] == 0) {
            stack.push([i,j])
        }
    }
}

for (let [i,j] of stack) {
    makeZeroRow(i)
    makeZeroCol(j)
}

function makeZeroRow(i) {
    for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = 0
    }
}

function makeZeroCol(j) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][j] = 0
    }
}