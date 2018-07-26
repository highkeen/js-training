var text=`hello
world ${Math.random()}`;
console.log(text);
console.log("===========================");
var arr=[10,20,30];

for(var i in arr){
    console.log(i);
}
console.log("===========================");

for(j of arr){
    console.log(j);
}
console.log("===========================");
var obj={id:1,name:'samik'};
for(var k in obj){
    console.log(k);
}
console.log("===========================");
for(var l of obj){
    console.log(l);
}


