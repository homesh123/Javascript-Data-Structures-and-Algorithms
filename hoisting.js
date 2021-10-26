function solution() {
    console.log(variableA); // undefined
    console.log(letA); // Cannot access 'letA' before initialization
    console.log(arr);// Cannot access 'acc' before initialization
    
    var variableA = 20;
    let letA = 30;
    const arr = ['a','b']
}

 solution();

function solutionWithTimeout() {
    setTimeout(() => {
        console.log(variableA); // 20
        console.log(letA); // 30
    }, 0);
    var variableA = 20;
    let letA = 30;
}

solutionWithTimeout();