// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// const contactform = document.getElementById('contact-form')
//   contactMessage = document.getElementById('message')

// const sendEmail = (e)=>{
//   e.preventDefault()

//   emailjs.sendForm('service_5255r0h','template_x0uub7l','#contact-form','8lj87XW4Ex7MUH2oW')
//   .then(()=>{
//     alert("Message Sent Successfully")
    
//     contactform.reset()
//   }, ()=>{
//     alert('Message not found')
//   })
// }

// contactform.addEventListener('submit',sendEmail)

const contactform = document.getElementById('contact-form');
const contactMessage = document.getElementById('message');

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_5255r0h','template_x0uub7l','#contact-form','8lj87XW4Ex7MUH2oW')
    .then(
      () => {
        alert("Message Sent Successfully");
        contactform.reset();
      },
      () => {
        alert('Message not sent');
      }
    );
};

contactform.addEventListener('submit', sendEmail);
