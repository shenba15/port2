// var cursor=document.querySelector(".cursor");
// document.addEventListener("mousemove",e => {
//     cursor.setAttribute("style","top:"+(e.pageY - 10)+"px; left:"+(e.pageX - 10)+"px;")
// })


// document.addEventListener("click",() =>{
//     cursor.classList.add("expand");

//     setTimeout(() => {
//         cursor.classList.remove("expand");
//     }, 500);
// })



const typed= new Typed('.multiple-text',{
    strings:['Full Stack Developer','Full Stack Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true
});


// icons 
let clr1=document.getElementById("clr1");
console.log(clr1);
clr1.style.backgroundColor="green";

clr1.addEventListener("click",function(){

    location.href="index.html";
})

let clr2=document.getElementById("clr2");
console.log(clr2);
clr2.addEventListener("click",function(){

    location.href="home.html"
})


let clr3=document.getElementById("clr3");
console.log(clr3);
clr3.addEventListener("click",function(){
   location.href="education.html"
})

let clr4=document.getElementById("clr4");
console.log(clr4);
clr4.addEventListener("click",function(){
    location.href="creation.html"
    
})

let clr5=document.getElementById("clr5");
console.log(clr5);
clr5.addEventListener("click",function(){
    location.href="contact.html"
    
})



// // main-head
let icon=document.getElementById("icon");
console.log(icon);

icon.addEventListener("click",function(){
    location.href="navbar.html"
})
