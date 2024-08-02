document.addEventListener("DOMContentLoaded", function() {
    const imageElement = document.getElementById('slider-image');
    const images = [
        "https://raw.githubusercontent.com/Killato122/sito-amore/main/IMG_8592.jpg",
        "https://raw.githubusercontent.com/Killato122/sito-amore/main/IMG_7903_Original.jpeg",
        "https://raw.githubusercontent.com/Killato122/sito-amore/main/IMG_8077_Original.jpeg",
        "https://raw.githubusercontent.com/Killato122/sito-amore/main/IMG_7212.jpeg",
        "https://raw.githubusercontent.com/Killato122/sito-amore/main/IMG_7067.jpeg"
    ];
    let currentIndex = 0;

    function showNextImage() {
        imageElement.classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
        setTimeout(() => {
            imageElement.classList.add('active');
        }, 100); // Delay to ensure opacity transition
    }

    setInterval(showNextImage, 8000); // Cambia immagine ogni 8 secondi
});
