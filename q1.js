// 1. Write a function that takes a string as input and returns the string reversed.


let str = (name) => {
    let reverseName = (name.split("").reverse().join(""));


    return reverseName;
}

console.log(str("faizan"));