

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active')
}

// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if (top >= offset && top < offset + height) {
      navLinks.forEach.apply(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      })
    }
  })

  // ---------------------sticky navbar--------------

  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // ---------------remove toggle icon-----------
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active')
}


scrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});
scrollReveal().reveal('.home-content,heading', { origin: 'top' })
scrollReveal().reveal('.home-img,.services-container, .portfolio-box, .contact form', { origin: 'button' })
scrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' })
scrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' })

// --------------------down load resume js-------------
// document.getElementById('download-resume').addEventListener('click', function (event) {
//   event.preventDefault();
//   let link = document.createElement('a');
//   link.href = 'resume.pdf'; // Path to your resume file
//   link.download = 'resume.pdf';
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// });
