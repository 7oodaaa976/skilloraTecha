document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".site-header");
  const mobileToggle = document.querySelector(".mobile-nav__toggle");
  const mobilePanel = document.querySelector(".mobile-nav__panel");
  const mobileLinks = document.querySelectorAll(".mobile-nav__links a");

  if (mobileToggle && mobilePanel) {
    mobileToggle.addEventListener("click", function () {
      mobileToggle.classList.toggle("active");
      mobilePanel.classList.toggle("active");
    });
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (mobileToggle && mobilePanel) {
        mobileToggle.classList.remove("active");
        mobilePanel.classList.remove("active");
      }
    });
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 20) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  if (typeof VANTA !== "undefined" && document.querySelector("#hero-banner")) {
    VANTA.WAVES({
      el: "#hero-banner",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200,
      minWidth: 200,
      scale: 1,
      scaleMobile: 1,
      color: 0x2563eb,
      shininess: 45,
      waveHeight: 16,
      waveSpeed: 0.2,
      zoom: 0.9,
    });
  }
});