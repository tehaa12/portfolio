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
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("active"); // Toggle the 'active' class for slide-in effect
});

// Smooth Scroll for Navigation Links
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent the default link behavior
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling effect

    // Close the nav after clicking a link (on mobile)
    if (window.innerWidth <= 768) {
      nav.classList.remove("active"); // Remove 'active' class to hide menu
    }
  });
});

// Contact Form Submission
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form action

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send form data to the backend
    try {
      const response = await fetch(
        "https://portfolio-backend-w6b1.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      // Handle the response
      const responseMessage = document.getElementById("responseMessage");
      if (response.ok) {
        responseMessage.innerText = "Message sent successfully!";
        responseMessage.style.color = "green";
        document.getElementById("contactForm").reset(); // Clear form fields
      } else {
        responseMessage.innerText = "Failed to send message.";
        responseMessage.style.color = "red";
      }
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("responseMessage").innerText =
        "An error occurred. Please try again.";
    }
  });

// Alternative Contact Form Submission with Spinner and Success Message
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Prepare form data
    const formData = { name, email, message };

    // Show spinner while submitting the form
    const spinner = document.getElementById("spinner");
    spinner.classList.add("show");

    try {
      // Send form data to backend API
      const response = await fetch(
        "https://portfolio-backend-w6b1.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Hide spinner after submission
      spinner.classList.remove("show");

      if (response.ok) {
        // Show success animation
        const successMessage = document.getElementById("successMessage");
        successMessage.classList.add("show");

        // Clear form fields after successful submission
        document.getElementById("contactForm").reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          successMessage.classList.remove("show");
        }, 5000);
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);

      // Hide spinner in case of error
      spinner.classList.remove("show");

      // Show error message
      const responseMessage = document.getElementById("responseMessage");
      responseMessage.innerText = "An error occurred. Please try again.";
      responseMessage.style.color = "red";
    }
  });
