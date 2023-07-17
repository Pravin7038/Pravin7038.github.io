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
const resumeButtons = document.querySelectorAll('.nav-link.resume');
resumeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const resumeURL = button.getAttribute('data-resume');
        const fileName = resumeURL.substring(resumeURL.lastIndexOf('/') + 1);
        downloadResume(resumeURL, fileName);
    });
});

function downloadResume(url, fileName) {
    const anchorElement = document.createElement('a');
    anchorElement.href = url;
    anchorElement.download = fileName;
    anchorElement.target = '_blank';
    anchorElement.style.display = 'none';
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
}


// const button = document.querySelectorAll('.nav-link.resume');

// if (button) {
//   button.scrollIntoView();
// } else {
//   console.error('Button element not found.');
// }

