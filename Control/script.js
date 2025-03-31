document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.list li a');
    const sections = document.querySelectorAll('div[id]');

    // Function to handle active class
    const setActiveLink = (id) => {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === id) {
                link.classList.add('active');
            }
        });
    };

    // Set the Home link as active when the page loads
    setActiveLink('home');

    // Add click event to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            setActiveLink(this.getAttribute('href').substring(1));
        });
    });

    // Intersection Observer to handle scroll event
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setActiveLink(entry.target.id);
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
});


function navpopup(){
    var menu=document.getElementById("list");
    menu.classList.toggle("show")
}
function closeNav(){
    var sidemenu = document.getElementById("list");
    sidemenu.classList.remove("show")
}


const texts = [
    "Computer Science Undergraduate",
    "Mobile Application Developer",
    "Frontend Developer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const delayBetweenTexts = 1500; // Pause before switching text

function typeWriter() {
    const intro = document.getElementById("intro");
    const currentText = texts[textIndex];

    if (isDeleting) {
        intro.innerHTML = currentText.substring(0, charIndex--);
    } else {
        intro.innerHTML = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length + 1) {
        setTimeout(() => (isDeleting = true), delayBetweenTexts);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // Move to next text
    }

    setTimeout(typeWriter, speed);
}

window.onload = typeWriter;


