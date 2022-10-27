$(document).ready(function () {
  AOS.init({
    duration: 1000,
  });
  onGoalClicked();
  $(window).scroll(() => {
    changeNavBg();
  });
});

function changeNavBg() {
  var scroll = $(window).scrollTop();
  if (scroll > 100) {
    $(".header").css("background", "#eae6e398");
  } else {
    $(".header").css("background", "transparent");
  }
}

function onGoalClicked() {
  const panels = document.querySelectorAll(".panel");
  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
      panel.classList.add("active");
    });
  });
}
