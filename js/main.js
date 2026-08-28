/* =====================================================================
   I Do — main.js
   Week 03: navigation behaviour, booking counter, package search.
   ===================================================================== */
(function () {
  "use strict";

  /* ---------- 1. Mobile navigation toggle ---------- */
  var burger = document.getElementById("burger");
  var links = document.getElementById("nav-links");

  burger.addEventListener("click", function () {
    var open = links.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  // Close the panel after tapping a link (single-page anchors).
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      links.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    }
  });

  // Close on Escape.
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && links.classList.contains("is-open")) {
      links.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      burger.focus();
    }
  });

  /* ---------- 2. Shadow on the sticky navbar after scrolling ---------- */
  var nav = document.getElementById("nav");
  var onScroll = function () {
    nav.classList.toggle("is-stuck", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- 3. Booking list (cart) badge counter ---------- */
  var count = 0;
  var badge = document.getElementById("cart-count");
  var toast = document.getElementById("toast");
  var toastTimer;

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2200);
  }

  document.querySelectorAll(".add-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      count += 1;
      badge.textContent = String(count);
      btn.textContent = "Added";
      btn.classList.add("is-added");
      showToast(btn.dataset.item + " added to your booking");

      setTimeout(function () {
        btn.textContent = "Add to booking";
        btn.classList.remove("is-added");
      }, 1600);
    });
  });

  document.getElementById("cart-btn").addEventListener("click", function () {
    showToast(
      count === 0
        ? "Your booking list is empty"
        : count + (count === 1 ? " item" : " items") + " in your booking"
    );
  });

  /* ---------- 4. Live search over the package grid ---------- */
  var search = document.getElementById("site-search");
  var cards = Array.prototype.slice.call(document.querySelectorAll("#package-grid .card"));
  var empty = document.getElementById("empty-state");

  search.addEventListener("input", function () {
    var q = search.value.trim().toLowerCase();
    var matches = 0;

    cards.forEach(function (card) {
      var hay = (card.dataset.name + " " + card.textContent).toLowerCase();
      var hit = q === "" || hay.indexOf(q) !== -1;
      card.hidden = !hit;
      if (hit) matches += 1;
    });

    empty.hidden = matches !== 0;
  });

  /* ---------- 5. Footer year ---------- */
  document.getElementById("year").textContent = new Date().getFullYear();
})();
