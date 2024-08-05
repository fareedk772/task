// 9. Write a function that takes a string and returns the number of vowels in the string.




let vowels = (str) => {

    let count = 0;

    for(let i = 0; i<=str.length; i++) {
        let letter = str[i];
        if(letter == "a" || letter == "i" || letter == "e" || letter == "o" || letter == "u"){

            count = count +1;

        }
    }

    return count;
}

console.log(vowels("fareed"));