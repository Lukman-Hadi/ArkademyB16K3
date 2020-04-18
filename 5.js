function createMatrix(dim){
    //buat matrix
    let matrix = [];
    for(let i = 0;i<dim;i++){
        matrix[i]=[];
        for(let j=0;j<dim;j++){
            matrix[i][j]= Math.floor(Math.random()*100)+1;
        }
    }
    //diagonal1+2
    console.log(matrix);
    let mainSum = 0, secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length - row - 1];
    }
    console.log(mainSum+secondarySum);
}

createMatrix(3)