// 7. Write a function that checks if a given number is a prime number

let checkNO = (num) => {
    if(num %=2){

        document.write("yes its prime number");

    }else{
        document.write("no its not prime number")
    }
}

let num = prompt("enter the number");

checkNO(num);