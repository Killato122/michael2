// slider.js

document.addEventListener("DOMContentLoaded", function() {
    const imageElement = document.getElementById('slider-image');
    const images = [
        "https://raw.githubusercontent.com/Killato122/michael2/main/IMG_8592.jpg",
        "https://4.bp.blogspot.com/-VYGbN1jdPsU/ViCBCeH09KI/AAAAAAAAAi8/3ktLe6FZ1qI/s1600/Rare%2BPepe.png",
        "https://b2b.dondi.it/cat/products/1402/01-00-g.jpg?t=1707317040?t=1707317040"
    ];
    let currentIndex = 0;

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        imageElement.src = images[currentIndex];
    }

    setInterval(showNextImage, 10000); // Cambia immagine ogni 10 secondi
});
