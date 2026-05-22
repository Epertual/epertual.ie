// Scroll-reveal: fade sections in as they enter the viewport.
// Progressive enhancement — without this script, .reveal elements stay visible
// (the hiding styles are scoped to the .js class set on <html> in the head).
(function () {
  "use strict";
  var els = document.querySelectorAll(".reveal");
  if (!els.length) { return; }

  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("in"); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  els.forEach(function (el) { observer.observe(el); });
})();
