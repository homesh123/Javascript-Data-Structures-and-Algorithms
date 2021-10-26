//Find missing number in array sequence

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length;
    let totalSum = ((n+1)*(n+2))/2; console.log(totalSum)
    let sum = 0;
    A.forEach(element => {
        sum += element;
    });console.log(sum);
    return (totalSum - sum);
}
console.log(solution([2,3,1,5]));