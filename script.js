// // Add your desired JavaScript functionalities here

// // Smooth scrolling for navigation links
// const navLinks = document.querySelectorAll('.nav-link');
// navLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = link.getAttribute('href');
//         const targetSection = document.querySelector(targetId);
//         targetSection.scrollIntoView({ behavior: 'smooth' });
//     });
// });



// // Open resume in a new tab and download as PDF
// const resumeButtons = document.querySelectorAll('.nav-link.resume');
// resumeButtons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         event.preventDefault();
//         const resumeURL = button.getAttribute('data-resume');
//         const fileName = resumeURL.substring(resumeURL.lastIndexOf('/') + 1);
//         downloadResume(resumeURL, fileName);
//     });
// });

// function downloadResume(url, fileName) {
//     const anchorElement = document.createElement('a');
//     anchorElement.href = url;
//     anchorElement.download = fileName;
//     anchorElement.target = '_blank';
//     anchorElement.style.display = 'none';
//     document.body.appendChild(anchorElement);
//     anchorElement.click();
//     document.body.removeChild(anchorElement);
// }

// const navLinks = document.querySelectorAll('.nav-link');
// navLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = link.getAttribute('href');
//         const targetSection = document.querySelector(targetId);
//         console.log(targetSection);
//         if (targetSection) {
//             targetSection.scrollIntoView({ behavior: 'smooth' });
//         } else {
//             console.error('Target section not found.');
//         }
//     });
// });

// // Open resume in a new tab and download as PDF
// const resumeButtons = document.querySelectorAll('.nav-link.resume');
// resumeButtons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         event.preventDefault();
//         const resumeURL = button.getAttribute('data-resume');
//         console.log(resumeURL);
//         if (resumeURL) {
//             const fileName = resumeURL.substring(resumeURL.lastIndexOf('/') + 1);
//             downloadResume(resumeURL, fileName);
//         } else {
//             console.error('Resume URL not found.');
//         }
//     });
// });

// function downloadResume(url, fileName) {
//     const anchorElement = document.createElement('a');
//     anchorElement.href = url;
//     anchorElement.download = fileName;
//     anchorElement.target = '_blank';
//     anchorElement.style.display = 'none';
//     document.body.appendChild(anchorElement);
//     anchorElement.click();
//     document.body.removeChild(anchorElement);
// }



const button1 = document.querySelector('#resume-button-1');
const button2 = document.querySelector('#resume-button-2');

if (button1) {
  button1.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector('#targetSection1');
    console.log(targetSection);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Target section 1 not found.');
    }
  });
} else {
  console.error('Button 1 not found.');
}

if (button2) {
  button2.addEventListener('click', (e) => {
    e.preventDefault();
    const targetSection = document.querySelector('#targetSection2');
    console.log(targetSection);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('Target section 2 not found.');
    }
  });
} else {
  console.error('Button 2 not found.');
}

// Open resume in a new tab and download as PDF
const resumeButtons = document.querySelectorAll('.nav-link.resume');
resumeButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    const resumeURL = button.getAttribute('data-resume');
    console.log(resumeURL);
    if (resumeURL) {
      const fileName = resumeURL.substring(resumeURL.lastIndexOf('/') + 1);
      downloadResume(resumeURL, fileName);
    } else {
      console.error('Resume URL not found.');
    }
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

  









