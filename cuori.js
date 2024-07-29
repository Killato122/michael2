document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('background-music');
    if (audio) {
        audio.volume = 0.5; // Imposta il volume al 50%
    }

    // Funzione per creare un cuore
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `-20px`; // Inizia appena sopra la visuale
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Durata casuale per ogni cuore
        document.body.appendChild(heart);

        // Rimuovi il cuore dopo che è caduto
        setTimeout(() => {
            heart.remove();
        }, 5000); // Assicurati che il cuore venga rimosso dopo 5 secondi
    }

    // Crea cuori ogni 300ms
    setInterval(createHeart, 300);
});
