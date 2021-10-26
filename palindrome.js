
//Palindrome number in c: A palindrome number is a number that is same after reverse. For example 121, 34543, 343, 131, 48984 are the palindrome numbers.

function isPalindrome(num){
    if (num == num.split('').reverse().join('')) {
        console.log(num + ' is palindrome.');
    }
    else {
        console.log(num + ' is not palindrome.');
    }
}

isPalindrome('121'); // 121 is palindrome.
isPalindrome('1121'); // 1121 is not palindrome.
