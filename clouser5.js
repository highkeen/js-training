function f(){
    var x=0;

    function incre(){
        x++;
    }

    function log(){
        console.log(x);
    }
    return [incre,log];
}


var r=f();

r[0]();
r[1]();