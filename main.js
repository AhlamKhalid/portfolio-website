// elements
const navOverlay = document.getElementById("nav-overlay");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const allNavLinks = document.querySelectorAll(".navigation-link");

// show/hide navigation
const showNavigation = () => {
  navOverlay.classList.add("show");
};

const hideNavigation = () => {
  navOverlay.classList.remove("show");
};

// navigation events
menuIcon.addEventListener("click", showNavigation);
closeIcon.addEventListener("click", hideNavigation);
allNavLinks.forEach((navLink) => {
  navLink.addEventListener("click", hideNavigation);
});
