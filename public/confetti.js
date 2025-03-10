document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("confetti");
    const confettiCtx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let confettiParticles = [];

    function ConfettiParticle(x, y, size, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    function createConfetti() {
        const colors = ["#ff0", "#ff5733", "#00ffcc", "#ff1493", "#ff4500"];
        for (let i = 0; i < 100; i++) {
            confettiParticles.push(
                new ConfettiParticle(
                    Math.random() * canvas.width,
                    Math.random() * canvas.height,
                    Math.random() * 6 + 4,
                    Math.random() * 4 - 2,
                    Math.random() * 4 + 2,
                    colors[Math.floor(Math.random() * colors.length)]
                )
            );
        }
    }

    function updateConfetti() {
        confettiCtx.clearRect(0, 0, canvas.width, canvas.height);
        confettiParticles.forEach((p, index) => {
            p.x += p.speedX;
            p.y += p.speedY;

            if (p.y > canvas.height) {
                confettiParticles[index] = new ConfettiParticle(
                    Math.random() * canvas.width,
                    -10,
                    p.size,
                    p.speedX,
                    p.speedY,
                    p.color
                );
            }
        });
    }

    function drawConfetti() {
        confettiParticles.forEach((p) => {
            confettiCtx.fillStyle = p.color;
            confettiCtx.beginPath();
            confettiCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            confettiCtx.fill();
        });
    }

    function animateConfetti() {
        updateConfetti();
        drawConfetti();
        requestAnimationFrame(animateConfetti);
    }

    createConfetti();
    animateConfetti();
});
