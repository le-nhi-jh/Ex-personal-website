const mainFunc = () => {
  window.addEventListener("scroll", function () {
    handleFixHeader();
    addAnimationForProgressBar();
  });
  const handleFixHeader = () => {
    const header = document.getElementById("header");
    if (window.scrollY > 50) {
      header.classList.add("fixed", "shadow");
    } else {
      header.classList.remove("fixed", "shadow");
    }
  };
  const addAnimationForProgressBar = () => {
    const lastCircle = document.querySelectorAll(".circle-last");

    if (window.scrollY > 2400) {
      lastCircle.forEach((item) => {
        item.classList.add("animation-for-progress-bar");
      });
    } else {
      lastCircle.forEach((item) => {
        item.classList.remove("animation-for-progress-bar");
      });
    }
  };
  const menuLink = document.querySelector(".menu-link");
  const menuButton = document.querySelector(".menu-button");

  menuButton.addEventListener("click", () => {
    menuLink.classList.toggle("open-menu");
  });
};

mainFunc();
