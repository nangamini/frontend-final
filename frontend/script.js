document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");
  
    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector(".dropdown-toggle");
      const menu = dropdown.querySelector(".dropdown-menu");
  
      if (toggle && menu) {
        toggle.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation(); // prevent global click handler from firing
          menu.classList.toggle("show");
  
          // Close dropdown if clicked outside
          document.addEventListener(
            "click",
            function handler(event) {
              if (!dropdown.contains(event.target)) {
                menu.classList.remove("show");
                document.removeEventListener("click", handler); // remove listener after one use
              }
            },
            { once: true }
          );
        });
      }
    });
  });
  
  
    const searchInput = document.querySelector(".search-input");
    if (searchInput) {
      searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
          const value = searchInput.value.trim();
          if (value) {
            alert(`Search: ${value}`);
          }
        }
      });
    }
  
   