document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");

  const links = document.querySelectorAll("a, button[data-link]");
  links.forEach(link => {
    link.addEventListener("click", e => {
      const href = link.getAttribute("data-link") || link.getAttribute("href");
      if (href && !href.startsWith("#") && !href.startsWith("javascript")) {
        e.preventDefault();
        document.body.classList.add("fade-out");
        setTimeout(() => {
          window.location.href = href;
        }, 600); // نفس مدة الترانزيشن
      }
    });
  });
});
window.addEventListener("load", () => {
  const oldLogo = document.getElementById("oldLogo");
  const newLogo = document.getElementById("newLogo");

  setTimeout(() => {
    oldLogo.classList.add("fade-out");
    newLogo.classList.add("fade-in");
  }, 2000); // ← المدة قبل التبديل (2 ثانية)
});

