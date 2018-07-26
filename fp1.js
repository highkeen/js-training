var arr=[10,20,30,5,9,11];


var isOdd=(i)=>i%2 !=0;
var sqr= i => i*i;
var add=(i,j)=> i+j;

arr.filter(isOdd).forEach(i=>console.log(i));
console.log("=====transform======");
arr.map(sqr).forEach(i=>console.log(i));

console.log("=====reduce sum======");
console.log(arr.reduce(add,0));

var tdArr=[[10,20],[30,40],[50,60]];
var merge=(arr1,arr2)=> [...arr1,...arr2];

console.log("=====reduce 2d array to 1d======");
console.log(tdArr.reduce(merge,[]));
