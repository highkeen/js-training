/* function outer(num){
    function inner(num){
        return num*10;
    }
    var r=inner(num);
    console.log(r);
}

outer(10); */

function callBack(num){
    console.log(`its fired... ${num}`);
}

function asyncOp(c){
    setTimeout(() => {
        console.log('async done');
        c(10);/* invoke callBack */
    }, 1000);
}


asyncOp(callBack); //c=callBack
//callBack();
asyncOp(function(data){
    console.log(`its fired anno... ${data}`);
});

asyncOp((data)=>console.log(`its fired anno lamda... ${data}`));
/* var sum=function(a,b){
    return a+b;
}
 */

 var sum=(a,b)=>{return a+b};