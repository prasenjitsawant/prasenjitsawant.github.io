let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "prasenjitsawant1111@gmail.com",
//         Password : "Prasenjit12345",
//         To : 'prasenjitsawant1111@gmail.com',
//         From : document.getElementById('email').value,
//         Subject : "Msg from portfolio",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }
