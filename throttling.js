function throttle(fn,limit){
    let callfunc = true;
    return function(){
        if(callfunc){
            fn.call();
             callfunc = false;
            setTimeout(() => callfunc = true, limit)
        }
   }
}
function logTxt(){
    console.log("Hi");
}


document.body.addEventListener('click', throttle( logTxt, 2000));
