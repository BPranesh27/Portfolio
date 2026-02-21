// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Scroll Animations (Intersection Observer)
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Once visible, stop observing (optional)
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-view').forEach(el => {
    observer.observe(el);
});

// Sticky Navbar Background on Scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.padding = "10px 0";
        navbar.style.boxShadow = "0 10px 30px -10px rgba(2, 12, 27, 0.7)";
    } else {
        navbar.style.padding = "20px 0";
        navbar.style.boxShadow = "none";
    }
});

// Blast Confetti on "Send Message" (Mock functionality)
// Force Download Resume
document.querySelector('a[download]').addEventListener('click', function (e) {
    e.preventDefault();
    const url = this.getAttribute('href');
    const filename = 'Pranesh_B_Resume.pdf';

    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const blobUrl = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = blobUrl;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(blobUrl);
            document.body.removeChild(a);
        })
        .catch(() => window.location.href = url); // Fallback
});
