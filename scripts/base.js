$(document).ready(function () {
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
