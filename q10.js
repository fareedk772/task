// 10. Write a function that takes a string and capitalizes the first letter of each word.

let firstCap = (str) => {

   let fin = str.split(" ").map((first) =>  first.charAt(0).toUpperCase() + first.slice(1)).join(" ");

    return fin;
}

console.log(firstCap("fareed khan"));
