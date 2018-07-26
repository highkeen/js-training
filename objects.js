var obj={name:'samik',id:1,address:{}};

function f(){}


let {name,...rest}=obj;

console.log(name);
console.log(rest);


var create1={
    name:name,
    other:rest,
    f:f
};

console.log(create1);


var create2={
    name,
    other:rest,
    f
};

console.log(create2);