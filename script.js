 // =========================
 // CINEVERSE MAIN JS
 // =========================

 // ==========================
// MOVIE POPUP PLAYER
// ==========================

const buttons = document.querySelectorAll(".watch-Btn");

// Open Popup

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const sourceTag = button.querySelector("video source");

        // Ignore cards without videos
        if (!sourceTag) return;

        const videoSrc = sourceTag.getAttribute("src");

        popupSource.src = videoSrc;

        popupVideo.load();

        popup.style.display = "flex";

        popupVideo.play();

    });

});

const cards = document.querySelectorAll(".movie-card");

const popup = document.getElementById("moviePopup");
const popupVideo = document.getElementById("popupVideo");
const popupSource = document.getElementById("popupSource");
const closeBtn = document.querySelector(".close-popup");

// Open Popup

cards.forEach(card => {

    card.addEventListener("click", () => {

        const sourceTag = card.querySelector("video source");

        // Ignore cards without videos
        if (!sourceTag) return;

        const videoSrc = sourceTag.getAttribute("src");

        popupSource.src = videoSrc;

        popupVideo.load();

        popup.style.display = "flex";

        popupVideo.play();

    });

});

// Close Button

closeBtn.addEventListener("click", closePopup);

// Click Outside Popup

popup.addEventListener("click", (e) => {

    if (e.target === popup) {
        closePopup();
    }

});

// ESC Key Support

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        closePopup();
    }

});

// Close Function

function closePopup() {

    popupVideo.pause();

    popupVideo.currentTime = 0;

    popup.style.display = "none";

}

    // =========================
    // LOGIN BUTTON ACTION
    // =========================
    const loginBtn = document.querySelector(".login-btn");

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            window.location.href = "register.html";
        });
    }

    // =========================
    // HERO BUTTON ACTIONS
    // =========================
    const infoBtn = document.querySelector(".info-btn");

        infoBtn.addEventListener("click", () => {
            alert("More info coming soon...");
        });

    // =========================
    // SEARCH FUNCTIONALITY (BASIC FILTER)
    // =========================
    const searchInput = document.querySelector(".search-box input");
    const movieCards = document.querySelectorAll(".movie-card");

    if (searchInput) {
        searchInput.addEventListener("keyup", (e) => {
            const value = e.target.value.toLowerCase();

            movieCards.forEach(card => {
                const title = card.querySelector("h3");
                if (!title) return;

                const text = title.innerText.toLowerCase();

                if (text.includes(value)) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    }

const container = document.querySelector("#movie-row");

container.addEventListener("wheel", (e) => {
    e.preventDefault();
    container.scrollBy({
        left: e.deltaY*2,
        behavior: 'smooth'
    });
});

const containers = document.querySelector("#movie-row2");

containers.addEventListener("wheel", (e) => {
    e.preventDefault();
    containers.scrollBy({
        left: e.deltaY*2,
        behavior: 'smooth'
    });
});