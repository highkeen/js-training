var arr = [10, 20, 5, 7];

var isOdd = item => item % 2 != 0;
var sqr= item => item * item;
var sum=(a,b)=>a+b; 

//arr.filter(isOdd).forEach(i=> console.log(i));

//arr.map(sqr).forEach(i=> console.log(i));

//console.log(arr.reduce(sum,0));

var tdArr=[[10,20],[30,40],[50,60]];  //[10,20,30,40,50,60]

var concatArr=(arr1,arr2) => [...arr1,...arr2];

console.log(tdArr.reduce(concatArr,[]));