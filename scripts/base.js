$(document).ready(function () {
  $(window).scroll(() => {
    changeNavBg();
  });
});

function changeNavBg() {
  var scroll = $(window).scrollTop();
  if (scroll > 100) {
    $(".header").css("background", "#FFF8EB");
  } else {
    $(".header").css("background", "transparent");
  }
}
