// JavaScript code for animations and responsiveness

// Responsive navigation menu
const toggleMenu = () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

// Smooth scroll to anchor links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substr(1);
        const targetSection = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});

// Animation for scrolling elements
const animateScrollElements = () => {
    const scrollElements = document.querySelectorAll('.scroll-animation');
    
    scrollElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight) {
            element.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animateScrollElements);

// Responsive layout adjustments
const adjustLayout = () => {
    const contentDivs = document.querySelectorAll('.content-div');
    
    if (window.innerWidth < 768) {
        contentDivs.forEach(div => {
            div.style.width = '100%';
        });
    } else {
        contentDivs.forEach(div => {
            div.style.width = 'calc(50% - 20px)';
        });
    }
}

window.addEventListener('resize', adjustLayout);
