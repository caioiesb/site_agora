// Mostra as fotos da equipe quando a seção aparece na tela
document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".team-grid");
    if (!grid) return;

    if (!("IntersectionObserver" in window)) {
        grid.classList.add("visible");
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                grid.classList.add("visible");
                observer.disconnect();
            }
        });
    }, { threshold: 0.25 });

    observer.observe(grid);
});