document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
      console.log("Sidebar toggled!"); // للتحقق من عمل الكود
    });
  } else {
    console.error("Sidebar or Button not found!");
  }
});

  // Contact form validation with debounce
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  if (form && formInputs && formBtn) {
    let debounceTimer;
    formInputs.forEach((input) => {
      input.addEventListener("input", () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
          } else {
            formBtn.setAttribute("disabled", "");
          }
        }, 300); // 300ms debounce delay
      });
    });
  }

  // Page navigation
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  if (navigationLinks && pages) {
    navigationLinks.forEach((link) => {
      link.addEventListener("click", function () {
        const targetPage = this.innerHTML.trim().toLowerCase();

        pages.forEach((page) => {
          if (page.dataset.page === targetPage) {
            page.classList.add("active");
          } else {
            page.classList.remove("active");
          }
        });

        navigationLinks.forEach((lnk) => lnk.classList.remove("active"));
        this.classList.add("active");

        // Scroll to the top of the page
        window.scrollTo(0, 0);
      });
    });
  }

  // Set default active page (About)
  const defaultPage = document.querySelector("[data-page='about']");
  const defaultLink = document.querySelector("[data-nav-link]:first-child");

  if (defaultPage && defaultLink) {
    defaultPage.classList.add("active");
    defaultLink.classList.add("active");
  } else {
    console.warn("Default page or link not found!");
  };
