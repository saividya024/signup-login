let btn = document.getElementById("signupbtn")
let inputName = document.getElementById("userText")
let inputEmail = document.getElementById("userEmail")
let inputPswd = document.getElementById("userpassword")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (inputName.value != "" && inputEmail.value != "" && inputPswd.value != "") {
        let UserinputName = inputName.value
        let UserinputEmail = inputEmail.value
        let userinputpswd = inputPswd.value
        localStorage.setItem("name", UserinputName)
        localStorage.setItem("Email", UserinputEmail)
        localStorage.setItem("pswd", userinputpswd)
        alert(" Signup Successfull.................")
        window.location.href= "login.html"
    }else{
        alert("Please fill the fields............!")
    }

})