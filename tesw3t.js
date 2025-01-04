// 3*3 of matrix 1 2 3
//               0 1 4
//               3 3 3

function setMatrix (matrix){

    let rows = new Set();
    let cols = new Set();


    for(let i = 0 ;i<matrix.length; i++){
        for(let j = 0 ;j<matrix[0].length;j++){
            if(matrix[i][j]===0){
                rows.add(i)
                cols.add(j)
            }
        }
    }

        for(let row of rows ){
            for (let j = 0 ;j<matrix[0].length;j++){
                matrix[row][j]=0;
            }
        }
        for(let col of cols ){
            for (let j = 0 ;j<matrix.length;j++){
                matrix[j][col]=0;
            }
        }


        return matrix
}

let matrix = [
    [1,2,4],
    [4,5,6],
    [7,8,0]
]

console.log(setMatrix(matrix))