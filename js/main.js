$(document).ready(function(){
    
    const navbar = $(".navbar");
    const menu = $(".nav_menu");
    const links = $(".nav_links");
    const sections = $("section");
    const config = {
        rootMargin: "0px",
        threshold: [0.6, 0.9],
    };

    function handleLlinks() {
        if (window.innerWidth <= 1200) {
            links.toggleClass('visible');
        }
    }

    menu.click(function(){
        handleLlinks();
    }) 

    links.click(function(){
        handleLlinks();
    })

    window.scroll(function() {
        window.scrollY > 100 && (navbar.style.background = 'rgba(0,0,0,0.9)');
        window.scrollY < 100 && (navbar.style.background = 'transparent');
    });

    ScrollReveal().reveal(".nav", { delay: 200 });
    ScrollReveal().reveal(".home_profile", { delay: 600 });
    ScrollReveal().reveal(".home_title1", { delay: 300 });
    ScrollReveal().reveal(".home_title3", { delay: 500 });
    ScrollReveal().reveal(".home_title2", { delay: 400 });
    /*ScrollReveal().reveal(".section_title", { delay: 250 });
    ScrollReveal().reveal(".section_subtitle", { delay: 350 });
    ScrollReveal().reveal(".about_description", { delay: 350 });
    ScrollReveal().reveal(".about__summary", { delay: 450 });
    ScrollReveal().reveal(".button--cta", { delay: 550 });
    ScrollReveal().reveal(".skill__title", { delay: 450 });
    ScrollReveal().reveal(".skill__item", { delay: 450 });
    ScrollReveal().reveal(".services__item", { delay: 450 });
    ScrollReveal().reveal(".portfolio__item", { delay: 450 });
    ScrollReveal().reveal(".contact__item", { delay: 450 });
    */
    ScrollReveal().reveal("footer", { delay: 200 });





})

