/* Find First Duplicate */


let array = [];
let count = 0;

var addInArrayDup = () => {
    var curr = document.getElementById('inputNumber').value
    array[count] = curr;
    count++;
    document.getElementById('inputNumber').value = ''
    displayArray();
}

var resetDup = () => {
    array = [];
    count = 0;
    displayArray();
    document.getElementById('display-first').innerHTML = 'Details will be shown here'
}

var displayArray = () => {
    var displayArray = ''
    for (var i = 0; i < array.length; i++) {
        displayArray += array[i] + ' ';
    }
    document.getElementById('display-first').innerHTML = displayArray;
}

var calculateDuplicate = () => {
    let res = array[0];
    for (let i = 1; i < array.length; i++) {
        res = res ^ array[i]
    }
    document.getElementById('display-first').innerHTML = 'Single Number in Array is ' + res;
};


/* Largest Contiguous Subarray Sum */

let array2 = []
let count2 = 0

let addInArrayLargest = () => {
    let curr = document.getElementById('inputNumber2').value
    array2[count2] = curr;
    count2++;
    document.getElementById('inputNumber2').value = ''
    displayArray2();
}

var displayArray2 = () => {
    let displayArray = ''
    for (var i = 0; i < array2.length; i++) {
        displayArray += array2[i] + ' ';
    }
    document.getElementById('display-second').innerHTML = displayArray;
}

var resetLargest = () => {
    array2 = [];
    count2 = 0;
    displayArray2();
    document.getElementById('display-second').innerHTML = 'Details will be shown here'
}


var findLargestSum = () => {
    let max = array2[0];
    let current = Math.max(max, 0);
    for (let i = 1; i < array2.length; i += 1) {
        current +=  parseInt(array2[i]);
        max = Math.max(max, current);
        current = Math.max(current, 0);

    }
    document.getElementById('display-second').innerHTML = 'Largest Sum is ' + max;
}