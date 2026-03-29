//========Toggle icon navbar============
var menuIcon = document.getElementById("menu-icon");
var navbar = document.getElementById("navbar");


menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark"); 
    navbar.classList.toggle("active");
}

navbar.onclick =() =>{
menuIcon.classList.remove("fa-xmark");
navbar.classList.remove("active");
}


//============scroll section active link=============
var sections = document.querySelectorAll("section");
var navlinks = document.querySelectorAll("header nav a");

window.onscroll = () =>{
    sections.forEach(sec=>{
         var top =window.scrollY;
         var offset =sec.offsetTop ;
         var height =sec.offsetHeight ;
         var id = sec.getAttribute("id");

         if(top >= offset && top <offset + height){
            navlinks.forEach(links =>{
                links.classList.remove("active");
                document.querySelector("header nav a[href*="+id +"]").classList.add("active");
            });
         }
    });
}

//===================scrolll revel===========
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 200,
    delay: 400
});
ScrollReveal().reveal("#home-content, #heading", { origin: "top" });
ScrollReveal().reveal("#home-img,#abouth2, #services-container, .portfolio-box, #container-form", { origin: "bottom" });

ScrollReveal().reveal("#home-content h1, #about img", { origin: "left" });
ScrollReveal().reveal("#home-content p, #about-content", { origin: "left" });
