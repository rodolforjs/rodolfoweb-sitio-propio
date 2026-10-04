// Revela los elementos .scrollanimation una sola vez, justo cuando entran
// al viewport por primera vez. No se repite nunca (se deja de observar
// apenas se activa), así no hay replays al scrollear hacia arriba/abajo.
(function () {
    function reveal(el) {
        el.classList.add('in-view');
    }

    document.addEventListener('DOMContentLoaded', function () {
        var els = document.querySelectorAll('.scrollanimation');

        if (!('IntersectionObserver' in window)) {
            els.forEach(reveal);
            return;
        }

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    reveal(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px' });

        els.forEach(function (el) { observer.observe(el); });
    });
})();
