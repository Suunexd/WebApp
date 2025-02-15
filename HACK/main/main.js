const $darkMode = document.getElementById("dark-mode");
const dark= document.getElementById("dark");
var i=0;
$darkMode.addEventListener("click", ()=> 
    {   if(i%2==0)
        var footer=document.body.querySelector("[footer-container]").style.backgroundcolor = '232421';
        console.log(footer);
        document.body.querySelector(".container").style.backgroundcolor = '#232421';
    });


    