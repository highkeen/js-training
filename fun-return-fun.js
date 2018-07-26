function Outer(){
    return ()=>{
        console.log('hello fom inner');
        return 2;
    }
}

function ex() {
    return 4;
}
console.log(ex);
ex = ex();
console.log(ex);
// Outer()();

// var inner=Outer();
// inner();

// Outer()
// Outer=Outer();
// Outer();