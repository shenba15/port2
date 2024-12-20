// var getsave=JSON.parse(localStorage.getItem("imagevideo"));
var getsave=localStorage.getItem("cards");
console.log(getsave);
var savedbody=document.getElementById("savedbody");

var save=document.createElement("div");
save.classList.add("container","cont");
savedbody.appendChild(save);

var cont=document.getElementsByClassName("cont");
console.log(cont);
save.innerHTML=getsave;

// for(let i=0;i<getsave.length;i++){
//     console.log(getsave[i]);
//     var save=document.createElement("div");
//     save.classList.add("container","cont");
//     savedbody.appendChild(save);
//     save.innerHTML=(JSON.stringify(getsave[i]));
// }
