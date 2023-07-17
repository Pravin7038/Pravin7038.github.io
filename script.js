// Add your desired JavaScript functionalities here

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Open resume in a new tab and download as PDF
const resumeLinks = document.querySelectorAll('.nav-link.resume');
resumeLinks.forEach(link => {
    link.addEventListener('click', () => {
        window.open(link.getAttribute('href'), '_blank');
    });
});
