const submitbtn=document.querySelector(".submitbtn");
const icons=document.querySelectorAll(".icon");
export var logat = 0;
submitbtn.addEventListener('click', () => {
        logat=1;
        console.log(logat);
})
for(let i=0;i<3;i++)
    icons[i].addEventListener('click', () => {
        logat=1;
        console.log(logat);
})

