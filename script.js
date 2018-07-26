/* function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload=function(){
    var colours=['red','green','black'];
    var h1s=document.getElementsByTagName('h1');
    h1s[0].addEventListener('click',function(event){
        h1s[0].style.color=colours[getRandomInt(0,2)];
        h1s[0].lastColor=h1s[0].style.color;
        event.stopPropagation();
    });

    h1s[0].addEventListener('mouseover',function(){
        h1s[0].lastColor=h1s[0].style.color;
        h1s[0].style.color='pink';
    });

    h1s[0].addEventListener('mouseout',function(e){
        h1s[0].style.color=h1s[0].lastColor;
    });


    var bodys=document.getElementsByTagName('body');

    bodys[0].addEventListener('click',function(){
        bodys[0].innerHTML+='<h2>Newly added</h2>';

    });

    window.createH3=function(event){
        var element=document.createElement('h3');
        element.innerHTML='Created by button click';
        document.getElementsByTagName('body')[0].appendChild(element);
        event.stopPropagation();
    }



} */

window.onload = function() {
    var ele = document.getElementById('span1');
    ele.addEventListener('click', function(event){
        console.log('Span clicked!');
        event.stopPropagation();
        event.stopImmediatePropagation();
    });
    ele.addEventListener('click', function(event1){
        console.log('Span clicked again!');
        event1.stopPropagation();
    });

    var pElement = document.querySelectorAll('p');
    pElement[0].addEventListener('click', function(){
        console.log('p clicked!');
    })

}

var colours=['red','green','blue', 'pink'];

setInterval(() => {
    var ele = document.querySelectorAll('h1');
    ele[0].style.backgroundColor=colours[Math.floor(Math.random()*colours.length)]
}, 1000);
