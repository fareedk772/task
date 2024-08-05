// 4.Write a function that takes an array of numbers and returns the largest number.



const largestArr = (arr) => {

    let maxArr = arr[0];

    for(let i = 0; i<= arr.length; i++){
        if(maxArr < arr[i]){
            maxArr = arr[i];
        }
    }
    return maxArr;
    
}

let finalArr = [22,44,76, 98, 76];

console.log("the largest no in this array is ", largestArr(finalArr));



