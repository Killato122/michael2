document.addEventListener("DOMContentLoaded", function() {
  const noButton = document.getElementById('no');
  const yesButton = document.getElementById('yes');

  // Gestisce il clic sul pulsante "No"
  noButton.addEventListener('click', function() {
      noButton.innerHTML = '😭'; // Sostituisce il testo con l'emoji triste
      playSound('https://github.com/Killato122/michael2/blob/main/Sad%20Hamster%20Violin%20Meme%20Full.mp3'); // Suona un effetto sonoro triste
  });

  // Gestisce il clic sul pulsante "Sì"
  yesButton.addEventListener('click', function() {
      window.location.href = "yes.html";
      playSound('yes.mp3'); // Suona un effetto sonoro felice
  });

  

  function playSound(file) {
      const audio = new Audio(file);
      audio.play();
  }
});
