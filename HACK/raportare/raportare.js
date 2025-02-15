const sub=document.querySelectorAll(".button");
const response=document.querySelector(".response");
console.log(response);
var opacity = 0; 
var intervalID = 0; 
    
function fadeout() {
    var op = 1;  
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            response.style.display = 'none';
        }
        response.style.opacity = op;
        response.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 2000);
}
function fadein() {
    var op = 0.05;  
    var timer = setInterval(function () {
        if (op >= 0.9){
            clearInterval(timer);
            response.style.display = 'none'; 
            
        }
        //  response.style.opacity = op;
        console.log(op);
        response.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
        console.log(op);
    }, 1000);
}
console.log(sub);
sub[0].addEventListener('click',()=>{
    response.style.visibility='visible'; 
    console.log(response);
    fadein();
   
   setTimeout(()=>
{
    fadeout();
    response.style.visibility='hidden'; 
},6000)
    
   
})