const mainFunc = () => {
  const menuLink = document.querySelector(".menu-link");
  const menuButton = document.querySelector(".menu-button");
  const buttonBackToTop = document.getElementById("button-back-to-top");

  window.addEventListener("scroll", function () {
    handleFixHeader();
    addAnimationForProgressBar();
    handleBackToTop();
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
  const handleBackToTop = () => {
    if (window.scrollY > 300) {
      buttonBackToTop.classList.add("show");
    } else {
      buttonBackToTop.classList.remove("show");
    }
  };

  menuButton.addEventListener("click", () => {
    menuLink.classList.toggle("open-menu");
  });

  buttonBackToTop.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

mainFunc();
