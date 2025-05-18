// Diaporama
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change toutes les 3 secondes
}

// Formulaire feedback (À propos)
document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-message').textContent = "Merci pour votre avis !";
    this.reset();
});

// Formulaire contact
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-message').textContent = "Message envoyé avec succès !";
    this.reset();
});

// Chat en direct
function sendMessage() {
    let input = document.getElementById('chat-input').value;
    if (input) {
        let messages = document.getElementById('chat-messages');
        let message = document.createElement('p');
        message.textContent = "Vous : " + input;
        messages.appendChild(message);
        messages.scrollTop = messages.scrollHeight;
        document.getElementById('chat-input').value = "";
        setTimeout(() => {
            let reply = document.createElement('p');
            reply.textContent = "Spectrus : Merci, nous vous répondrons bientôt !";
            messages.appendChild(reply);
            messages.scrollTop = messages.scrollHeight;
        }, 1000);
    }
}

// Carte Leaflet
document.addEventListener('DOMContentLoaded', function() {
    let map = L.map('map').setView([48.8566, 2.3522], 13); // Paris par défaut
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);
    L.marker([48.8566, 2.3522]).addTo(map)
        .bindPopup('Siège Spectrus (exemple)').openPopup();
});
