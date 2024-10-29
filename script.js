document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('nav ul li a');
  links.forEach(link => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          document.getElementById(targetId).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});

lucide.createIcons();



function copyText(element) {
    navigator.clipboard.writeText("nikolai.long.dev@gmail.com").then(() => {
        element.classList.add("active");
        setTimeout(() => element.classList.remove("active"), 1000);
    });
}