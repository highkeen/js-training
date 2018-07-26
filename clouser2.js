var n=null;

function f(){
    return function(){
        n='samik';
    }
}

function printN(){
    console.log(n);
}

var inner=f();
inner();
printN();
