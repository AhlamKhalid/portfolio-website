// elements
const navOverlay = document.getElementById("nav-overlay");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const allNavLinks = document.querySelectorAll(".navigation-link");
const greenTheme = document.getElementById("green-theme");
const blueTheme = document.getElementById("blue-theme");
const orangeTheme = document.getElementById("orange-theme");

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

// set theme
const setTheme = (themeColor) => {
  // get :root styles
  const rootStyles = document.styleSheets[1].cssRules[0].style;

  rootStyles.setProperty(
    "--current-theme-light",
    rootStyles.getPropertyValue(`--${themeColor}-theme-light`)
  );
  rootStyles.setProperty(
    "--current-theme-dark",
    rootStyles.getPropertyValue(`--${themeColor}-theme-dark`)
  );
  rootStyles.setProperty(
    "--current-theme-accent",
    rootStyles.getPropertyValue(`--${themeColor}-theme-accent`)
  );
};

// theme switcher
greenTheme.addEventListener("click", () => setTheme("green"));

blueTheme.addEventListener("click", () => setTheme("blue"));

orangeTheme.addEventListener("click", () => setTheme("orange"));
