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
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Pobranie wartości pól formularza
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Symulacja wysłania formularza (można podłączyć do backendu)
        console.log("Formularz wysłany!");
        console.log("Imię:", name);
        console.log("E-mail:", email);
        console.log("Wiadomość:", message);

        // Wyświetlenie komunikatu o sukcesie
        formMessage.textContent = "Dziękuję za wiadomość! Odpowiem najszybciej, jak to możliwe.";
        formMessage.style.display = "block";

        // Czyszczenie formularza
        contactForm.reset();
    });
});
//Rozwijane menu hamburger
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    // Kliknięcie w hamburger otwiera menu i zmienia ikonę
    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("show");
        
        // Zmiana ikony
        if (navMenu.classList.contains("show")) {
            hamburger.innerHTML = "✖"; // Krzyżyk
        } else {
            hamburger.innerHTML = "☰"; // Trzy kreski
        }
    });

    // Zamknięcie menu po kliknięciu w link i zmiana ikony z powrotem
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function() {
            navMenu.classList.remove("show");
            hamburger.innerHTML = "☰"; // Powrót do trzech kresek
        });
    });
});
//OBŁUGA COOKIES
document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesBtn = document.getElementById("accept-cookies");

    // Sprawdzenie, czy użytkownik już zaakceptował cookies
    if (localStorage.getItem("cookiesAccepted") === "true") {
        cookieBanner.style.display = "none";
    }

    // Obsługa kliknięcia przycisku "Akceptuję"
    acceptCookiesBtn.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true"); // Zapis zgody
        cookieBanner.style.display = "none"; // Ukrycie banneru
    });
});


