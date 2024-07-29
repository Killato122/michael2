// script.js

document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');

    // Gestisce il clic sul pulsante "No"
    noButton.addEventListener('click', function() {
        noButton.innerHTML = '😭'; // Sostituisce il testo con l'emoji triste
    });

    // Gestisce il clic sul pulsante "Sì"
    yesButton.addEventListener('click', function() {
        window.location.href = "yes.html";
    });

    const messages = [
        "Sei il mio sole!",
        "Adoro ogni momento con te!",
        "Il mio cuore è tuo!",
        "Sei la mia gioia!"
      ];
      
      function showRandomMessage() {
        const message = messages[Math.floor(Math.random() * messages.length)];
        document.getElementById('love-messages').textContent = message;
      }
      
      setInterval(showRandomMessage, 2000); // Cambia messaggio ogni 2 secondi
      

});
