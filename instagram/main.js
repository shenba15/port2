
var register=document.getElementById("register");
console.log(register);
var login=document.getElementById("login");
console.log(login);

register.addEventListener("click",function(e){
    e.preventDefault();
    let regusername=document.getElementById("username").value;
    console.log(regusername);
    let regpassword=document.getElementById("password").value;
    console.log(regpassword);

    let formData={
        username:regusername,
        password:regpassword
    }
    console.log(formData);
    saveformData(formData);
})

function saveformData(setformData){
    const storeformData=JSON.parse(localStorage.getItem("setformData"))||[];
    storeformData.push(setformData);
    localStorage.setItem("setformData",JSON.stringify(storeformData));

    location.href="login.html"
}

login.addEventListener("click",function(e){
    e.preventDefault()
    location.href="login.html"
})


