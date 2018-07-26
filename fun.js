/* 
function printHello(name='default',...x){
    //name = name || 'default';
    console.log(`Hello ${name}`);
    console.log(x);
}
printHello('samik');
printHello('samik','roy','asd');
var arr1=[10,20,30];
var arr2=[30,40,50];

//arr1=arr1.concat(arr2);
var arr3=[...arr1,...arr2];
console.log(arr3);
 

/* function m(){
    {
        let y=20;
    }
    console.log(y);
    var x=10;
} 

//m();

var s=`Hello ${1+2}
       World`;
console.log(s);


function checkArg(){
    console.log(arguments);
}

checkArg();
checkArg(10,20,30); 


var arr=[10,20,30];

console.log("==== test for in []======");
for(let i in arr){
    console.log(i)
}
console.log("==== test for of []======");
for(let i of arr){
    console.log(i)
}

var obj={id:1,name:"samik"};

console.log("==== test for in {}======");
for(let i in obj){
    console.log(i)
}
console.log("==== test for of {}======");
for(let i of obj){
    console.log(i)
}*/

/*
var arr1=[10,20,30];
var arr2=[40,50];
var arr3=[...arr1,...arr2];

var obj={id:1,name:'samik'};
var ob1={name:'other'};

var m={sec:'a',...obj,...ob1};

console.log(m);


function f(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}

//f(1,2,3);
var o={id:1,name:'samik'};
//f(1,2,o);
f(1,2,...[10,20],...[30]);
*/

 var vh=function(){
    console.log(aData);
    var aData=10;
}
vh();

var vhA=vh;
vhA();