
function f(initial){
    return function(){
        initial++;
        console.log(initial);
    }
}

var inner=f(1);
inner();
inner();
