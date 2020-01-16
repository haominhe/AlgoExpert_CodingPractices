/*
Merge Sort
Write a function that takes in an array of integers and returns a sorted version of that array. Use the
Merge Sort algorithm to sort the array.

Sample input: [8, 5, 2, 9, 5, 6, 3]
Sample output: [2, 3, 5, 5, 6, 8, 9]

Method 1 (Best, Average, Worst Cases)
Time Complexity: O(n log n)
Space Complexity: O(n log n)

Method 2 (Best, Average, Worst Cases)
Time Complexity: O(n log n)
Space Complexity: O(n)
 */


function mergeSort(array) {
    return mergeSortHelper2(array)
}

// Method 1
function mergeSortHelper(array) {
    //returns array if length is 1 or less
    if (array.length <= 1) {
        return array;
    }

    var midValue = Math.floor((array.length) / 2);
    var leftArr = array.slice(0, midValue);
    var rightArr = array.slice(midValue);


    var singleLeft = mergeSortHelper(leftArr);
    var singleRight = mergeSortHelper(rightArr)

    return merge(singleLeft, singleRight);
}

// Method 1.1
function compare(a, b) {
    return a < b;
}

function merge(left, right) {
    var resultArr = [];

    while (left.length || right.length) {
        const leftValue = left[0];
        const rightValue = right[0];
        if (!left.length) {
            resultArr.push(rightValue);
            right.shift();
        } else if (!right.length) {
            resultArr.push(leftValue);
            left.shift();
        } else {
            if (compare(leftValue, rightValue)) {
                resultArr.push(leftValue);
                left.shift();
            } else {
                resultArr.push(rightValue);
                right.shift();
            }
        }
    }
    return resultArr;
}


// Method 1.2
// function merge(Left, Right) {

//     var resultArr = [];
//     var leftIndex = 0;
//     var rightIndex = 0;

//     while (leftIndex < Left.length && rightIndex < Right.length) {
//         if (Left[leftIndex] < Right[rightIndex]) {
//             resultArr.push(Left[leftIndex]);
//             // console.log(resultArr)
//             leftIndex++;
//         } else {
//             resultArr.push(Right[rightIndex]);
//             rightIndex++;
//         }
//     }

//     if (leftIndex < Left.length) {
//         var leftRemain = Left.slice(leftIndex);
//         resultArr = resultArr.concat(leftRemain)
//     }
//     if (rightIndex < Right.length) {
//         var rightRemain = Right.slice(rightIndex);
//         resultArr = resultArr.concat(rightRemain)
//     }
//     return resultArr;
// }


// Method 2
function mergeSortHelper2(array) {
    //returns array if length is 1 or less
    if (array.length <= 1) {
        return array;
    }
    var auxiliaryArr = JSON.parse(JSON.stringify(array));

    helper(array, 0, array.length - 1, auxiliaryArr);
    return array;
}

function helper(main, startIndex, endIndex, auxiliaryArr) {
    if (startIndex === endIndex) {
        return;
    }
    var midValue = Math.floor((startIndex + endIndex) / 2);

    helper(auxiliaryArr, startIndex, midValue, main);
    helper(auxiliaryArr, midValue + 1, endIndex, main);

    doMerge(main, startIndex, midValue, endIndex, auxiliaryArr)
}

function doMerge(main, startIndex, midValue, endIndex, auxiliaryArr) {
    let mainArrIndex = startIndex;
    let leftIndex = startIndex;
    let rightIndex = midValue + 1;

    while (leftIndex <= midValue && rightIndex <= endIndex) {
        if (auxiliaryArr[leftIndex] < auxiliaryArr[rightIndex]) {
            main[mainArrIndex] = auxiliaryArr[leftIndex]
            leftIndex++;
        } else {
            main[mainArrIndex] = auxiliaryArr[rightIndex];
            rightIndex++;
        }
        mainArrIndex++;
    }

    while (leftIndex <= midValue) {
        main[mainArrIndex++] = auxiliaryArr[leftIndex++]
    }
    while (rightIndex <= endIndex) {
        main[mainArrIndex++] = auxiliaryArr[rightIndex++]
    }

}

exports.mergeSort = mergeSort;