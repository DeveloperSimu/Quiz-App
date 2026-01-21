const sparkleContainer = document.getElementById("sparkle-container");

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    // Random size
    const size = Math.random() * 3 + 2; // 2px – 5px
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    // Random position
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.left = `${Math.random() * 100}%`;

    sparkle.style.position = "absolute";
    const colors = [
        "rgba(255,255,255,0.9)",   // white
        "rgba(0,183,255,0.9)",     // blue
        "rgba(0,255,157,0.9)"      // green
    ];

    const glow = [
        "0 0 6px #fff, 0 0 12px #fff",
        "0 0 6px #00b7ff, 0 0 14px #00b7ff",
        "0 0 6px #00ff9d, 0 0 14px #00ff9d"
    ];

    const i = Math.floor(Math.random() * colors.length);

    sparkle.style.background = colors[i];
    sparkle.style.boxShadow = glow[i];
    sparkle.style.borderRadius = "50%";
    sparkle.style.opacity = Math.random() * 0.8 + 0.2;
    sparkle.style.pointerEvents = "none";

    // Random animation
    const duration = Math.random() * 3 + 2; // 2s – 5s
    sparkle.style.animation = `floatSparkle ${duration}s ease-in-out infinite`;

    sparkleContainer.appendChild(sparkle);

    // Remove after some time to save DOM
    setTimeout(() => sparkle.remove(), duration * 1000);
}

// Generate multiple sparkles continuously
setInterval(createSparkle, 150);

// Keyframes for sparkle floating
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatSparkle {
    0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.8; }
    50% { transform: translateY(-20px) translateX(10px) scale(1.2); opacity: 0.5; }
    100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.8; }
}`;
document.head.appendChild(style);
