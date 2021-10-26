var myvar = "global";

    function f() {
        console.log(myvar); // (*)
        if (true) {
            var myvar = "local"; // (**)
        }
        console.log(myvar);
    }
    
    
    f();
    

    ///

    function f1() {
        var arr = [ "red", "green", "blue" ];
        var result = [];
        console.log(i);
        for(var i=0; i<arr.length-1; i++) {
            var func = function() {
                return arr[i];
            };
            result.push(func);
        }
        console.log(result);
    }

    f1()