document.addEventListener('DOMContentLoaded', () => {
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });


    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const interest = document.getElementById('interest').value;

        if (!name || !email || !interest) {
            displayMessage('Please fill out all fields before submitting.', 'error');
            return;
        }

        displayMessage('Processing your request...', 'success');
        
        setTimeout(() => {
            displayMessage(`Thank you, ${name}! The BabyCave team will reach out to you at ${email} regarding your interest in partnering.`, 'success');
            contactForm.reset();
        }, 1500);
    });

    function displayMessage(text, type) {
        formMessage.innerText = text;
        formMessage.classList.remove('hidden', 'success', 'error');
        formMessage.classList.add(type);
    }
});