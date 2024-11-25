let loginbtn=document.getElementById("btn1")
let loginName=document.getElementById("logintext")
let loginpswd=document.getElementById("loginpswd")

loginbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    let input = loginName.value
    let input1= loginpswd.value
    let localName=localStorage.getItem("name")
    let localpswd=localStorage.getItem("pswd")
    if(localName == input && localpswd==input1){
        alert("Login Successfull...........!")
        window.location.href="home.html"
    }else{
        alert("Oops.......! invalid details")
    }
})