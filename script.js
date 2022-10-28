let parallax = document.querySelector('.parallax');
let titulo = document.querySelector('.titulo');
let parallax1 = document.querySelector('.parallax1');
let titulo1 = document.querySelector('.titulo1');
let parallax2 = document.querySelector('.parallax2');
let titulo2 = document.querySelector('.titulo2');
let parallax3 = document.querySelector('.parallax3');
let titulo3 = document.querySelector('.titulo3');

function scrollParallax(){
    let scrollTop = document.documentElement.scrollTop;

    parallax.style.transform = 'translateY(' + scrollTop * -0.5 + 'px)';
    titulo.style.transform = 'translateY(' + scrollTop * 0.3 + 'px)';
    parallax1.style.transform = 'translateY(' + scrollTop * -0.5 + 'px)';
    titulo1.style.transform = 'translateY(' + scrollTop * 0.2 + 'px)';
    parallax2.style.transform = 'translateY(' + scrollTop * -0.1 + 'px)';
    titulo2.style.transform = 'translateY(' + scrollTop * 0.06 + 'px)';
    parallax3.style.transform = 'translateY(' + scrollTop * -0.1 + 'px)';
    titulo3.style.transform = 'translateY(' + scrollTop * 0.1 + 'px)';
}

window.addEventListener('scroll', scrollParallax);