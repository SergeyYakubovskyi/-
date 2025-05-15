(() => {
    "use strict";
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    document.addEventListener("DOMContentLoaded", (() => {
        setTimeout((() => {
            document.querySelector(".fa-birthday-cake").style.opacity = 0;
            document.querySelector(".birthday").style.opacity = 1;
        }), 2e3);
        setTimeout((() => {
            document.querySelector(".milf-text").style.opacity = 1;
        }), 3500);
        setTimeout((() => {
            document.querySelector(".milf-text").style.opacity = 0;
            document.querySelector(".fa-birthday-cake").style.opacity = 1;
        }), 6e3);
        setTimeout((() => {
            document.querySelector(".birthday").style.opacity = 0;
            document.querySelector(".video-wrapper").style.opacity = 1;
            document.querySelector(".video-greeting").style.opacity = 1;
        }), 6500);
    }));
    for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.classList.add("star");
        star.style.left = `${Math.random() * 100}vw`;
        star.style.top = `${Math.random() * 100}vh`;
        star.style.animationDuration = `${1 + Math.random() * 2}s`;
        document.body.appendChild(star);
    }
    const colors = [ "#ff3cac", "#784ba0", "#2b86c5", "#f9d423", "#f83600", "#fdc830" ];
    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${3 + Math.random() * 5}s`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        document.body.appendChild(confetti);
    }
    setTimeout((() => {
        const ribbonColors = [ "#ff4757", "#1e90ff", "#2ed573", "#ffa502", "#e84393", "#00cec9" ];
        for (let i = 0; i < 50; i++) {
            const ribbon = document.createElement("div");
            ribbon.classList.add("ribbon");
            ribbon.style.left = `${Math.random() * 100}vw`;
            ribbon.style.top = `-${Math.random() * 200}px`;
            ribbon.style.backgroundColor = ribbonColors[Math.floor(Math.random() * ribbonColors.length)];
            ribbon.style.animationDuration = `${3 + Math.random() * 4}s`;
            ribbon.style.animationDelay = `${Math.random() * 3}s`;
            document.body.appendChild(ribbon);
        }
    }), 4e3);
    window["FLS"] = true;
})();