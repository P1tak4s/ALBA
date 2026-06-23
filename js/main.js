/* ===================================================================
   ALBA Wellbeing — interactions
   =================================================================== */
(function () {
  "use strict";

  const header   = document.querySelector(".site-header");
  const navToggle = document.getElementById("nav-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  /* ---------- Header scrolled state ---------- */
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 16) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Mobile menu ---------- */
  if (navToggle && mobileMenu) {
  const closeMenu = () => {
    mobileMenu.hidden = true;
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  };
  const openMenu = () => {
    mobileMenu.hidden = false;
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.setAttribute("aria-label", "Close menu");
  };

  navToggle.addEventListener("click", () => {
    if (mobileMenu.hidden) openMenu();
    else closeMenu();
  });

  mobileMenu.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !mobileMenu.hidden) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 940 && !mobileMenu.hidden) closeMenu();
  });
  } /* end mobile menu */

  /* ---------- Scroll reveal (IntersectionObserver) ---------- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    reveals.forEach((el) => io.observe(el));

    // gentle stagger for grid children
    document.querySelectorAll(".service-grid, .quote-grid, .principles-grid").forEach((grid) => {
      grid.querySelectorAll(".reveal").forEach((el, i) => {
        el.style.setProperty("--d", (i % 6) * 0.07 + "s");
      });
    });
  } else {
    reveals.forEach((el) => el.classList.add("in-view"));
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-list a");
  if ("IntersectionObserver" in window && navLinks.length) {
    const map = {};
    navLinks.forEach((a) => { map[a.getAttribute("href").slice(1)] = a; });
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const link = map[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          navLinks.forEach((a) => a.classList.remove("active"));
          link.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Service "Book Now" prefills the form ---------- */
  const serviceSelect = document.getElementById("service");
  document.querySelectorAll(".service-link[data-service]").forEach((link) => {
    link.addEventListener("click", () => {
      const value = link.getAttribute("data-service");
      if (serviceSelect) {
        const opt = Array.from(serviceSelect.options).find((o) => o.value === value);
        if (opt) serviceSelect.value = value;
      }
    });
  });

  // "Book Free Consultation" buttons preselect consultation
  document.querySelectorAll('a[href="#contact"]').forEach((link) => {
    if (/free consultation/i.test(link.textContent)) {
      link.addEventListener("click", () => {
        if (serviceSelect) serviceSelect.value = "Free Introductory Consultation";
      });
    }
  });

  /* ---------- Contact form ---------- */
  const form = document.getElementById("booking-form");
  const status = document.getElementById("form-status");

  if (form) {
    const setError = (field, isError) => {
      field.classList.toggle("invalid", isError);
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      status.textContent = "";
      status.className = "form-status";

      const name  = form.elements.name;
      const email = form.elements.email;
      let valid = true;

      if (!name.value.trim()) { setError(name, true); valid = false; }
      else setError(name, false);

      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      if (!emailOk) { setError(email, true); valid = false; }
      else setError(email, false);

      if (!valid) {
        status.textContent = "Please add your name and a valid email so I can reply.";
        status.classList.add("error");
        (name.classList.contains("invalid") ? name : email).focus();
        return;
      }

      // Demo submission (no backend) — confirm warmly.
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Sending…";

      window.setTimeout(() => {
        form.reset();
        btn.disabled = false;
        btn.textContent = original;
        status.textContent = "Thank you, " + name.value.trim().split(" ")[0] +
          ". Your request has been received — I will be in touch personally, with care.";
        status.classList.add("success");
        status.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 900);
    });

    // clear error styling as the user types
    ["name", "email"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("input", () => el.classList.remove("invalid"));
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
