function* gen(){
    console.log('init');
    yield 1;
    console.log('execute again');
    yield 2;
}

var g=gen();
console.log(g.next());
console.log(g.next());
console.log(g.next());


/* for(i of gen()){
    console.log(i);
} */