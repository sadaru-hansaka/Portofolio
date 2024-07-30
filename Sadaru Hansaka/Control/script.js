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


// document.addEventListener('DOMContentLoaded', () => {
//     const text = "Computer Science Undergraduate.";
//     let index = 0;
//     const speed = 150; // typing speed in milliseconds
//     const typewriterElement = document.getElementById('intro');

//     function type() {
//         if (index < text.length) {
//             typewriterElement.textContent += text.charAt(index);
//             index++;
//             setTimeout(type, speed);
//         }
//     }

//     type();
// });
