// Site-wide interaction system. Vanilla JS, no framework — see
// .claude/skills/interaction-design for the timing/easing principles this
// follows. Everything here degrades gracefully: without JS, content is
// visible and static; with prefers-reduced-motion, animation is skipped
// entirely rather than just shortened.

(function () {
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --- Scroll reveal -------------------------------------------------
  if (!prefersReduced && "IntersectionObserver" in window) {
    var revealEls = document.querySelectorAll("[data-reveal]");

    revealEls.forEach(function (el) {
      el.classList.add("reveal-init");
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            entry.target.classList.remove("reveal-init");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Subtle parallax -------------------------------------------------
  if (!prefersReduced) {
    var parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));

    if (parallaxEls.length) {
      var ticking = false;

      var applyParallax = function () {
        var viewportH = window.innerHeight;

        parallaxEls.forEach(function (el) {
          var factor = parseFloat(el.getAttribute("data-parallax")) || 0.1;
          var rect = el.getBoundingClientRect();
          var centerOffset = rect.top + rect.height / 2 - viewportH / 2;
          el.style.transform = "translateY(" + (centerOffset * -factor).toFixed(2) + "px)";
        });

        ticking = false;
      };

      window.addEventListener(
        "scroll",
        function () {
          if (!ticking) {
            window.requestAnimationFrame(applyParallax);
            ticking = true;
          }
        },
        { passive: true }
      );

      applyParallax();
    }
  }
})();
