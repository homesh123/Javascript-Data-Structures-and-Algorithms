let str = "Homesh"

function reverseString(a){
    let splitString = a.split("").reverse().join("");
    return splitString;
}

console.log(reverseString(str))