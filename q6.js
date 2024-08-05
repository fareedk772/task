// 6. Write a function that takes an array of numbers and returns the sum of its elements.


let sumArr = (arr) => {
    let sum = 0;

    for(let i = 0 ; i < arr.length; i++) {

        sum += arr[i];
    }
    return sum;
}

let arr = [3,5,6,23,66,7,45];

console.log(sumArr(arr));
