document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('#image-slider .slider-image');
    let currentIndex = 0;

    function showNextImage() {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }

    if (images.length > 0) {
        images[0].classList.add('active');
    }

    setInterval(showNextImage, 10000);

    const audio = document.getElementById('background-music');
    if (audio) {
        audio.volume = 0.5;
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `-30px`; // Inizia un po' più in alto per visibilità
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`;

        document.body.appendChild(heart);

        // Usa requestAnimationFrame per un'animazione più fluida
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Ridurre il numero di cuori generati per secondo
    setInterval(createHeart, 500); // Aumenta l'intervallo per ridurre il numero di cuori

    const messages = [
        "Sei il mio sole in un giorno nuvoloso.",
        "Ogni momento con te è un capolavoro di felicità.",
        "Il mio cuore batte solo per te.",
        "Sei la mia gioia in un mondo di tristezza.",
        "Nel giardino del mio cuore, tu sei il fiore più bello.",
        "Tu rendi ogni giorno un'avventura incantevole.",
        "Sei la melodia che riempie la mia vita di dolcezza.",
        "Il tuo sorriso illumina il mio cammino.",
        "Con te, ogni istante è eterno.",
        "Sei il mio rifugio sicuro, la mia casa.",
        "Nel mio sogno più bello, ci sei sempre tu.",
        "Il tuo amore è il mio tesoro nascosto.",
        "Sei il mio compagno di viaggio nella vita.",
        "Amo il modo in cui il tuo sguardo parla al mio cuore.",
        "Sei la mia stella polare, che mi guida sempre.",
        "Il nostro amore è una poesia scritta nel cielo.",
        "Sei la mia dolce metà, la mia anima gemella.",
        "Ogni giorno con te è un miracolo che si avvera.",
        "Sei il mio porto sicuro in un mare tempestoso.",
        "Il tuo amore è il colore della mia vita.",
        "Sei la mia fonte di felicità inesauribile.",
        "Con te, il tempo si ferma e il cuore accelera.",
        "Sei il mio desiderio avverato.",
        "Il tuo amore è la melodia che accompagna i miei giorni.",
        "Sei la luce che illumina il mio mondo.",
        "Amo la bellezza del nostro amore eterno.",
        "Sei il mio sogno diventato realtà.",
        "Il tuo amore è la mia più grande benedizione.",
        "Sei la mia felicità incondizionata.",
        "Amo tutto di te, oggi e per sempre."
    ];

    function showRandomMessage() {
        const message = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('love-messages').textContent = message;
    }

    setInterval(showRandomMessage, 2000);
});
