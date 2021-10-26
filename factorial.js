function factorial(num){
    if(num == 0){
        return 0;
    }
    else if(num == 1){
        return 1;
    }else{
        
    let fact = 1;
    for (i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(fact);

    return fact;
}
}

factorial(5);  // 120