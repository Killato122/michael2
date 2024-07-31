document.addEventListener("DOMContentLoaded", function() {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    const loadingDiv = document.getElementById('loading');
    const sound = document.getElementById('sound');

    // Gestisce il clic sul pulsante "No"
    noButton.addEventListener('click', function() {
        noButton.innerHTML = '😭'; // Sostituisce il testo con l'emoji triste
        playSound('https://github.com/Killato122/michael2/blob/main/Sad%20Hamster%20Violin%20Meme%20Full.mp3'); // Suona un effetto sonoro triste
    });

    // Gestisce il clic sul pulsante "Sì"
    yesButton.addEventListener('click', function() {
        showLoadingScreen();
        setTimeout(function() {
            window.location.href = "yes.html";
        }, 5000); // Tempo in millisecondi per visualizzare la GIF e riprodurre il suono
    });

    function playSound(file) {
        sound.src = file;
        sound.play();
    }

    function showLoadingScreen() {
        loadingDiv.style.display = 'flex'; // Mostra la GIF di caricamento
        playSound('loading-sound.mp3'); // Suona un effetto sonoro per il caricamento
    }
});
