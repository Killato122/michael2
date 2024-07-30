document.addEventListener("DOMContentLoaded", function() {
    const maxHearts = 20; // Numero massimo di cuori visibili contemporaneamente
    let currentHearts = 0; // Conteggio dei cuori attualmente visibili

    function initializeHearts() {
        function createHeart() {
            if (currentHearts >= maxHearts) {
                return; // Non creare nuovi cuori se il limite è raggiunto
            }

            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = `-30px`; // Inizia un po' più in alto per visibilità
            heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
            heart.style.position = 'fixed'; // Posizionamento fisso

            // Incrementa il conteggio dei cuori
            currentHearts++;
            
            document.body.appendChild(heart);

            heart.addEventListener('animationend', () => {
                // Decrementa il conteggio dei cuori quando un cuore finisce la sua animazione e viene rimosso
                currentHearts--;
                heart.remove();
            });
        }

        setInterval(createHeart, 500); // Aumenta l'intervallo per ridurre il numero di cuori
    }

    initializeHearts();
});
