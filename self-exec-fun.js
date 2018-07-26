(function(name){
    console.log(`self invoked ${name}`);
})('samik');


((name)=>{
    console.log(`self invoked arrow ${name}`);
})('samik');


