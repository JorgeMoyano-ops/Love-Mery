const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", function () {
    document.body.innerHTML = `
        <div style="text-align: center; padding: 50px;">
            <h1>💖 ¡Sabía que dirías que sí! 💖</h1>
            <img src="parejafeliz.png" alt="Pareja feliz" width="300">
            <p style="font-size: 20px;">Eres la mejor persona del mundo, ¡te amo! 💕</p>
        </div>
    `;
});

noBtn.addEventListener("mouseover", function () {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    noBtn.style.position = "absolute";
    noBtn.style.left = ${x}px;
    noBtn.style.top = ${y}px;
});