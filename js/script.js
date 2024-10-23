// Scroll-to-Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

// Toggle navigation menu on mobile with slide-in effect
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('nav');
const navList = document.querySelector('nav ul');

// Function to toggle the navigation menu
menuIcon.addEventListener('click', () => {
    nav.classList.toggle('active'); // Toggle the 'active' class for slide-in effect
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth' // Smooth scrolling effect
        });

        // Close the nav after clicking a link (on mobile)
        if (window.innerWidth <= 768) {
            nav.classList.remove('active'); // Remove 'active' class to hide menu
        }
    });
});
