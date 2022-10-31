
function showLarge(e) {
  // 換大圖
  let small = e.target;
  document.getElementById("large").src = small.src;
}
function init() {
  // 小圖可以點按
  let imgs = document.querySelectorAll("#smallPanel img");
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].onclick = showLarge;
  }
}
window.addEventListener("load", init, false);


//加入收藏 或 取消收藏
function switchFavorite(e) {
  let heart = document.getElementById("heart");

  if (heart.title == "加入收藏") {
    heart.src = "../images/sub1-pic/price-icon1-2.png";
    heart.title = "取消收藏";
  } else { //取消(紅心)
    heart.src = "../images/sub1-pic/price-icon1.png";
    heart.title = "加入收藏";
  }
}

function init() {
  //設定[加入收藏 或 取消收藏]的點按事件
  //什麼事？ 發生在哪一個物件上? 該什麼？
  document.getElementById("heart").onclick = switchFavorite;

}//init
window.addEventListener("load", init, false);

window.addEventListener("load", function () {
  //-------------------
  let btnPluses = document.getElementsByClassName("btnPlus");
  let btnMinuses = document.getElementsByClassName("btnMinus");
  let qtys = document.getElementsByClassName("qty");

  for (let i = 0; i < btnPluses.length; i++) {
    //------註冊 + 按鈕
    btnPluses[i].onclick = function () {
      qtys[i].value = parseInt(qtys[i].value) + 1;
      // let qtyBox = e.target.previousElementSibling;
      // qtyBox.value = parseInt(qtyBox.value)+1;
    }

    //------註冊 - 按鈕
    btnMinuses[i].onclick = function () {
      if (qtys[i].value > 0) {
        qtys[i].value = qtys[i].value - 1;
      };
    };
  };
});

