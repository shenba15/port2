var userna = document.getElementById("userna");
console.log(userna);
var password = document.getElementById("passwrd");
console.log(password);
var logform = document.getElementById("login");
console.log(logform);

logform.addEventListener("click", function (e) {
    e.preventDefault();
    let user = userna.value;
    console.log(user);
    let pass = password.value;
    console.log(pass);
    let formData = JSON.parse(localStorage.getItem("setformData"));
    console.log(formData);
    let value, values;

    formData.forEach(function (e) {
        if (user === e.username) {
            value = true;
            localStorage.setItem("instausername", user);
            if (pass === e.password) {
                values = true;

            }
            else {
                values = false

            }
        }
        else {
            value = false;
        }
    })


    if (value == true && values == true) {
        alert("login successful");
        window.location = "insta.html";
    }
    else if (value == false) {
        alert("wrong username");
    }
    else if (values == false) {
        alert("wrong password");
    }

})


