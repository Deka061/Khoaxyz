let music;
let btn;
let playing = false;

window.addEventListener("load", () => {
    music = document.getElementById("bgm");
    btn = document.querySelector(".music-btn");

    const loading = document.getElementById("loading");
    const card = document.querySelector(".card");

    // GIỮ LOADING 1.2 GIÂY
    setTimeout(() => {
        if (loading) loading.style.display = "none";
        if (card) card.classList.remove("hidden");
    }, 1200);
});

// DARK MODE
function toggleMode() {
    document.body.classList.toggle("dark");
    const modeBtn = document.querySelector(".mode-btn");
    modeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

// MUSIC
function toggleMusic() {
    if (!music || !btn) return;

    if (playing) {
        music.pause();
        btn.classList.remove("playing");
        playing = false;
    } else {
        music.volume = 0.5;
        music.play().then(() => {
            btn.classList.add("playing");
            playing = true;
        }).catch(() => {
            alert("👉 Hãy chạm lại để bật nhạc");
        });
    }
}
