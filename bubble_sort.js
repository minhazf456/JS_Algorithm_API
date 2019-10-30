function printArray(arr){
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}


//// Answer Big O Time complexity: O(n)
function findNth(arr, n){
    console.log(arr[n]);
}


//// Answer Big O Time complexity: O(1)
function halving(n){
    var count = 0;
    while(n > 1){
        n = n/2;
        count++;
    }
    return count;
}


//// Answer Big O Time complexity: O(n)



function identityMatrix(n){
    var matrix = [];
    for(var i=0; i < n; i++){
        var row = [];
        for(var j=0; j < n; j++){
            if(j == i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}

//// Answer Big O Time complexity: O(n^2)