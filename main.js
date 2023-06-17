//change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach( faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus';
        } else {
            icon.className = 'uil uil-plus';
        }
    })
})

//show/hide nav menu
const menu = document.querySelector(".nav__menu")
const menuBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex"
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none"
})

//Close nav menu
const closeNav = () => {
    menu.style.display = "none"
    closeBtn.style.display = "none"
    menuBtn.style.display = "inline-block"
}

closeBtn.addEventListener('click', closeNav)

//scroll reveal
ScrollReveal({ distance: '60px' });
ScrollReveal().reveal('.header__left', { origin: 'left' });
ScrollReveal().reveal('.header__right', { origin: 'right' });

ScrollReveal().reveal('.categories', { origin: 'top' });

ScrollReveal().reveal('.courses h2', { origin: 'top' });
ScrollReveal().reveal('.courses__container', { origin: 'top' });

ScrollReveal().reveal('.faq', { origin: 'top' });

ScrollReveal().reveal('.testimonials__container', { origin: 'top' });

ScrollReveal().reveal('.about__achievements-left', { origin: 'left' });

ScrollReveal().reveal('.about__achievements-right', { origin: 'right' });

ScrollReveal().reveal('.team__member', { origin: 'right' });

ScrollReveal().reveal('.course', { origin: 'right' });

ScrollReveal().reveal('.contact', { origin: 'top' });