Array.prototype.myfilter = function(func){
    let arr = this;
    let result = [];
    for(let i = 0; i <= arr.length; i++)
    {
        if(func(arr[i])){
            result.push(arr[i])
        }
    }
    return result;

}



let newArr = [1, 2, 3, 4, 5, 6, 7, 8].myfilter((x) => x % 2 === 0);
console.log(newArr);