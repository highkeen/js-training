function outer(){
    var i;
    var arr=[];
    for(i=1;i<=3;i++){
        var f=function(){
            console.log(i);
        }
        arr.push(f);
    }
    return arr;
}

var a=outer();
a[0]();
a[1]();
a[2]();

