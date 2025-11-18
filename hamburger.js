/**
 * @name get_hamburg
 * @function
 * @returns {[HTMLElement, HTMLMedia]}
 */

document.addEventListener('mousedown', (ev) => { /** @type {HTMLImageElement} */
    /**@type {[HTMLElement, HTMLMediaElement]}*/const [hamburger, audio] = get_hamburg();
    {
        const m = Math.min(window.innerWidth, window.innerHeight) * 0.05;
        hamburger.style.setProperty('top', `${(ev.clientY + window.scrollY) - m}px`);
        hamburger.style.setProperty('left',`${(ev.clientX + window.scrollX) - m}px`);
    };
    const onplay = () => {
        audio.removeEventListener('playing', onplay)
        HAMBURGERS.appendChild(hamburger)
        void hamburger.offsetHeight;
        hamburger.style.setProperty("opacity", "1");
    };
    audio.addEventListener('playing', onplay);
    audio.play();
});