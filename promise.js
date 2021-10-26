let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve('hi'); // when successful
      myReject('err');  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { console.log(value)/* code if successful */ },
      function(error) { console.log(error)/* code if some error */ }
    );



    //example 2
    const myPromise1 = new Promise(function(myResolve, myReject) {
        setTimeout(function(){ myResolve("I love You !!"); }, 3000);
      });
      
      myPromise1.then(function(value) {
        console.log(value);
      });