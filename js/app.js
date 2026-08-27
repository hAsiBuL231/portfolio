$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots',
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    fade: true,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

// Navbar scroll effect
let header = document.querySelector('header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile nav if open
            mobileNav.classList.remove('open');
        }
    });
});

});