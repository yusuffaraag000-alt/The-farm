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
