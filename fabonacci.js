/*
0 + 1 = 1
1 + 1 = 2
1 + 2 = 3
2 + 3 = 5
3 + 5 = 8
5 + 8 = 13
...

Find fabonacci number for 20
*/



var fibonacci = [];  
fibonacci[1] = 1;  
fibonacci[2] = 1;  
for(var i = 3; i < 20; i++){
fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];  
}
for(var i = 1; i<fibonacci.length; i++){  
console.log(fibonacci[i]);  
}