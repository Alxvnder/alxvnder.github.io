
// preloader splashscreen
let intro = document.querySelector('.intro');
let logo = document.querySelector('.logoheader');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(() => {
            logoSpan.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade')
                }, (idx + 1) * 50)
            })
        }, 2000);

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2300)

    })
})







window.addEventListener('scroll', function () {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


// Tambahkan ini di dalam file JS kamu
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarNav');
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        if (window.innerWidth < 992) { // Hanya tutup otomatis di mobile
            bsCollapse.hide();
        }
    });
});