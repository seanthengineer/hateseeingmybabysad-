// ================================
// SCRIPT.JS - VINTAGE LOVE WEBSITE
// ================================

// 1. Audio Player Control with Auto-Play and Session Memory
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('bg-music'); // Select the audio element
    const btn = document.getElementById('play-btn');   // Select the play/pause button

    // Try to auto-play music if sessionStorage says it was playing
    if (sessionStorage.getItem('musicPlaying') === 'true') {
        audio.volume = 0.8;
        audio.play().then(() => {
            btn.innerHTML = "❚❚ Pause Music";
        }).catch(() => {
            btn.innerHTML = "♪ Play Music"; // Browser blocks autoplay
        });
    } else {
        btn.innerHTML = "♪ Play Music";
    }

    // Button click toggles music play/pause and remembers state
    btn.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            btn.innerHTML = "❚❚ Pause Music";
            sessionStorage.setItem('musicPlaying', 'true'); // Remember state
        } else {
            audio.pause();
            btn.innerHTML = "♪ Play Music";
            sessionStorage.setItem('musicPlaying', 'false');
        }
    });

    // ================================
    // 2. Scroll Fade-In Animation
    // ================================
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Trigger CSS fade-in
            }
        });
    }, { threshold: 0.1 }); // 10% of element visible triggers fade

    const fadeElements = document.querySelectorAll('.fade-in'); // Elements to fade in
    fadeElements.forEach(el => observer.observe(el));

}); // End of DOMContentLoaded

// ================================
// 3. Reveal Hidden Letter
// ================================
function openLetter() {
    const message = document.getElementById('hidden-message'); // Select hidden note
    // Only reveal if currently hidden
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden'); // Make it visible
        message.style.opacity = 0;          // Start transparent
        setTimeout(() => {
            message.style.transition = "opacity 1s"; // Fade duration
            message.style.opacity = 1;              // Fade in to fully visible
        }, 10); // Slight delay for smooth transition
    }
}
