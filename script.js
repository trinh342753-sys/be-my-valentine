// ===== Screen Elements =====
const questionScreen = document.getElementById('question-screen');
const yesScreen = document.getElementById('yes-screen');
const noScreen = document.getElementById('no-screen');

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const backBtn = document.getElementById('back-btn');

const heartsContainer = document.getElementById('hearts-container');
const confettiContainer = document.getElementById('confetti-container');

// ===== Screen Navigation =====
function showScreen(screen) {
    // Hide all screens
    questionScreen.classList.add('hidden');
    yesScreen.classList.add('hidden');
    noScreen.classList.add('hidden');

    // Show target screen with animation
    screen.classList.remove('hidden');
    screen.style.animation = 'none';
    screen.offsetHeight; // Trigger reflow
    screen.style.animation = 'cardAppear 0.6s ease-out';
}

// ===== Yes Button - Show I LOVE YOU =====
yesBtn.addEventListener('click', () => {
    showScreen(yesScreen);
    createConfetti();

    // More confetti bursts!
    setTimeout(createConfetti, 1000);
    setTimeout(createConfetti, 2000);

    // Extra hearts celebration
    for (let i = 0; i < 15; i++) {
        setTimeout(createFloatingHeart, i * 100);
    }
});

// ===== No Button - Show Try Again =====
noBtn.addEventListener('click', () => {
    showScreen(noScreen);
});

// ===== Back Button - Return to Question =====
backBtn.addEventListener('click', () => {
    showScreen(questionScreen);
});

// ===== Floating Hearts Background =====
const hearts = ['💕', '❤️', '💖', '💗', '💝', '💘', '🌹', '✨'];

function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';

    const duration = Math.random() * 5 + 6;
    heart.style.animationDuration = duration + 's';
    heart.style.animationDelay = Math.random() * 2 + 's';

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), (duration + 2) * 1000);
}

// Create hearts continuously
setInterval(createFloatingHeart, 600);

// Initial hearts
for (let i = 0; i < 10; i++) {
    setTimeout(createFloatingHeart, i * 200);
}

// ===== Confetti Effect =====
const confettiColors = ['#ff6b9d', '#ffd700', '#ff8fab', '#c9184a', '#ffb4c4', '#ff69b4'];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');

            // Mix of hearts and shapes
            if (Math.random() > 0.5) {
                confetti.textContent = ['💕', '❤️', '💖'][Math.floor(Math.random() * 3)];
                confetti.style.fontSize = (Math.random() * 15 + 10) + 'px';
                confetti.style.background = 'none';
            } else {
                confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            }

            confetti.style.left = Math.random() * 100 + 'vw';

            const duration = Math.random() * 2 + 3;
            confetti.style.animationDuration = duration + 's';

            confettiContainer.appendChild(confetti);

            setTimeout(() => confetti.remove(), duration * 1000);
        }, i * 20);
    }
}

console.log('💕 Made with love for a special Valentine! 💕');
