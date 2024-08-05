// 2. Write a function that takes a number as input and returns the factorial of that number.

    

    let factorial = (num) => {
        let fact = 1;
        for (let i = 1; i<=num; i++) {
            fact = fact * i;

        }

        return fact;
    }

    console.log(factorial(7));