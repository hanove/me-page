
window.addEventListener("scroll", function(){
    var navbar = document.getElementById("topnav");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})