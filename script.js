
// ===============================
// ANIMATED PROFESSIONAL IDENTITY
// ===============================

const words = [
    "Web Developer",
    "Cybersecurity Enthusiast",
    "Future Software Engineer"
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;

function typeEffect() {

    const typingElement = document.getElementById("typing-text");

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (deleting) {
        characterIndex--;
    } else {
        characterIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, characterIndex);

    let speed = deleting ? 50 : 100;

    if (!deleting && characterIndex === currentWord.length) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && characterIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 500;
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);


// ===============================
// STEP 7: CONTACT FORM
// ===============================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        const status = document.getElementById("form-status");

        // Replace this with your real email address
        const recipient = "YOUR_EMAIL@example.com";

        if (recipient === "YOUR_EMAIL@example.com") {
            status.textContent =
                "Please configure your email address in script.js first.";
            return;
        }

        const body =
            `Name: ${name}\n` +
            `Sender Email: ${email}\n\n` +
            `Message:\n${message}`;

        const mailtoLink =
            `mailto:${recipient}?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        status.textContent = "Opening your email application...";

        window.location.href = mailtoLink;

    });

}

// BACK TO TOP FUNCTION

const topButton = document.getElementById("back-to-top");

if (topButton) {
    topButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

