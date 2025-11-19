// ================================
// SCRIPT.JS - VINTAGE LOVE WEBSITE
// ================================

// 1. Audio Player Control with Auto-Play
document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById('bg-music'); // Select the audio element
    const btn = document.getElementById('play-btn');   // Select the play/pause button

    // Try to auto-play music when page loads
    audio.volume = 0.8; // Optional: set starting volume (0 to 1)
    audio.play().then(() => {
        // Auto-play succeeded
        btn.innerHTML = "❚❚ Pause Music";
    }).catch(() => {
        // Auto-play failed (browser requires user interaction)
        btn.innerHTML = "♪ Play Music";
    });

    // Button click toggles music play/pause
    btn.addEventListener("click", function() {
        if (audio.paused) {
            audio.play();
            btn.innerHTML = "❚❚ Pause Music";
        } else {
            audio.pause();
            btn.innerHTML = "♪ Play Music";
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
