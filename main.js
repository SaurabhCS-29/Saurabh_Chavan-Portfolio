// header scroll
let nav=document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scorlled");
    }
    else{
        nav.classList.remove("header-scorlled");
    }
}

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})

// Contac From send Email 
function sendEmail(){
    Email.send({
    Host : "smtp.gmail.com",
        Username : "saurabhc2922@gmail.com",
        Password : "Password",
        To : "saurabhc2922@gmail.com",
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enqury",
        Body : "Name:"+document.getElementById("name").value
        +"<br>"+ "Email:"+document.getElementById("email").value
        +"<br>"+ "Phone no.:"+document.getElementById("number").value
        +"<br>"+ "massage:"+document.getElementById("massage").value
}).then(
  message => alert("Massage Sent Succesfully.")
);
}
