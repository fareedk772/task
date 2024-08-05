// 8. Write a function that takes an array and returns a new array with duplicates removed.

let remDup = (arr) => {
    let newArr = [ ...new Set(arr)];

    return newArr;
}

let arr = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5];

console.log(remDup(arr));
