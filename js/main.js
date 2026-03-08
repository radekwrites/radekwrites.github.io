const header = document.querySelector("header");
const menuButton = document.getElementById("nav-icon");
const navLink = document.querySelector(".nav-links");
const navLinkItems = document.querySelectorAll(".nav-links-item");

let showMenu = false;

function closeNav() {
  setTimeout(() => {
    showMenu = false;
    navLink.classList.remove("show-nav-links");

    menuButton.setAttribute("aria-expanded", false);
    menuButton.setAttribute("aria-label", "Menü öffnen");

    changeIcon();
  }, 200);
}

function headerColor() {
  window.scrollY >= 10 || showMenu
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
}

function changeIcon() {
  const icon = menuButton.querySelector("img");

  icon.src = showMenu
    ? "../assets/icons/x.svg"
    : "../assets/icons/hamburger.svg";
}

function toggleMenu() {
  menuButton.addEventListener("click", () => {
    navLink.classList.toggle("show-nav-links");

    showMenu = !showMenu;

    // ✅ accessibility
    menuButton.setAttribute("aria-expanded", showMenu);
    menuButton.setAttribute(
      "aria-label",
      showMenu ? "Menü schließen" : "Menü öffnen"
    );

    headerColor();
    changeIcon();
  });
}

toggleMenu();
window.addEventListener("scroll", headerColor);
navLink.addEventListener("click", closeNav);
