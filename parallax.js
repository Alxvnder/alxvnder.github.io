const heroSection = document.querySelector('.hero-section');
const aboutSection = document.querySelector('.about-section');
const webSection = document.querySelector('.web-section');

const welcomeText = document.getElementById('welcome-text');
const welcomeCaption = document.getElementById('welcome-caption');
const scrollCricle = document.getElementById('scroll-circle');
const heroImg = document.getElementById('hero-img');
// const aboutTitle = document.getElementById('about-title');
// const aboutDesc = document.getElementById('about-desc');
// const webProjects = document.getElementById('web-projects');
// const webList = document.getElementById('web-list');

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    // Hero Section Parallax
    // welcomeText.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    // welcomeCaption.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    // scrollCricle.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    heroImg.style.transform = `translateY(${scrollPosition * 0.1}px)`;

    // About Section Parallax
    // aboutTitle.style.transform = `translateY(${scrollPosition * 0.1}px)`;
    // aboutDesc.style.transform = `translateY(${scrollPosition * 0.1}px)`;

    // Web Section Parallax
    // webProjects.style.transform = `translateY(${scrollPosition * 0.2}px)`;
    // webList.style.transform = `translateY(${scrollPosition * 0.4}px)`;
});