document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");
  
  accordions.forEach(button => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      panel.style.display = (panel.style.display === "block") ? "none" : "block";
    });
  });
});
