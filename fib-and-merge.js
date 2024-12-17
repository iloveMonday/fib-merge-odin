function fibIt(n){
    let array = [];
    for (let i = 0; i < n; i++){
        if (i === 0){
            array.push(0);
        }
        else if (i === 1){
            array.push(1)
        }
        else {
            array.push(array[i-1] + array[i-2])
        }
        
    }
    return array;
}

console.log(fibIt(5));


function fibRec(n, arr = [], start = 0){
    if(start == n + 1){
        return arr;
    }
    if(start == 0){
        arr.push(0)
        fibsRec(n, arr, start + 1)
        return arr;
    }
    if(start == 1){
        arr.push(1)
        fibsRec(n, arr, start + 1)
        return arr;
    }
    else{
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        fibsRec(n, arr, start + 1)
        return arr;
    }
}

console.log(fibRec(5))


let sortArray = [3, 2, 1, 13, 8, 5, 0, 1]

function mergeSort(array){
    if (array.length < 2){
        return array;
    }
    let halfway = Math.floor(array.length/2);
    let left = array.slice(0, halfway);
    let right = array.slice(halfway, array.length)

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let result = [];

    while (left.length && right.length){
        if (left[0] <= right[0]){
            result.push(left.shift())
        }
        else {
            result.push(right.shift())
        }
    }

    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());


    return result;
}

console.log(mergeSort(sortArray))