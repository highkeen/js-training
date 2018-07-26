var data=20;

function f(){
    var m="samik";
    return function(){
        return m;
    }
}

var inner=f();
console.log(inner());