document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll(".about-content, .goals-content, .trial-content, .faq-content, .contact-content");
    const faqQuestions = document.querySelectorAll(".faq-question");

    // Animacja pojawiania się sekcji podczas przewijania
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));

    // Rozwijane FAQ
    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle("visible");
        });
    });
});
