// 3. Write a function that checks if a given string is a palindrome.



    function palindrome (string) {
        let length = string.length;
        let backString = string.split("").reverse().join("");
        let isPalindrome = true;
        
        for (let i = 0; i< length/2; i++){
            if(string !== backString){
                isPalindrome = false;
                break;

            }
        }

        if(isPalindrome){
           document.write("yes! it is palindrome string");
        }else{
            document.write("no! it's palingrome string ");
        }
    }


    palindrome("fareed");
