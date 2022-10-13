//common start
// search 設定
// search txt 文字清空
$('.search_cancel_btn').click(function(){
    console.log("searchCancel click");
    console.log($('.search_type').val());
    $('.search_type').val(null);
});

// 手機search bar 顯示
$('#searchShowNav').click(function(){
    console.log("searchShow click");
    $('.search_bar').toggleClass('on');
})

// menu 顯示
$('#burgerBtns').click(function(){
    console.log("burgerBtnOn click");
    $('.menu').toggleClass('on');
    $('#burgerBtns').toggleClass('on');
});

window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll('.scro');
    for(var i = 0; i< reveals.length; i++){
      var window_height = window.innerHeight;
      var reveal_top = reveals[i].getBoundingClientRect().top;
      var reveal_point = 150;

      if(reveal_top < window_height - reveal_point){
          reveals[i].classList.add('active');
      }else{
        reveals[i].classList.remove('active');
      }
    }  
}

//common end

//books start

// books aside btn

$('#asideBtn').click(function(){
    console.log("asideBtnOn click");
    $('.aside.filter').toggleClass('on');
});

$('.aside_link').click(function(){
    $('.aside.filter').toggleClass('on');
});

// books 產品 more 顯示(複製)
let i = 1;
$('#booksBtnCloseMoreCate1').click(function(){
    console.log('show');
    $('#cate1Book').addClass('on');
    let newID = `cate1Book${i}`;
    i++;
    $('#cate1Book').clone().attr('ID', newID).insertBefore('#booksBtnCloseMoreCate1Div');
    $(newID).addClass('.row.books_row');
});

$('#booksBtnCloseMoreCate2').click(function(){
    console.log('show');
    $('#cate2Book').addClass('on');
    let newID = `cate2Book${i}`;
    i++;
    $('#cate2Book').clone().attr('ID', newID).insertBefore('#booksBtnCloseMoreCate2Div');
    $(newID).addClass('.row.books_row');
});

$('#booksBtnCloseMoreCate3').click(function(){
    console.log('show');
    $('#cate3Book').addClass('on');
    let newID = `cate3Book${i}`;
    i++;
    $('#cate3Book').clone().attr('ID', newID).insertBefore('#booksBtnCloseMoreCate3Div');
    $(newID).addClass('.row.books_row');
});
//books end

// product
$('.price_fisrt_btn').click(function(){
  $('.second_btn').addClass('on');
});

//personal study
$('#BtnNavMore').click(function(){
    $('.profile .nav').toggleClass('on');
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        center: true,
        dots: false,
        nav: false,
        mouseDrag: true, // 滑鼠拖曳
        touchDrag: true, // 觸控拖曳
        pullDrag: false,
        autoplay:true,  /* 自動輪播 */
        autoplayTimeout:3000,  /* 輪播速度 */
        URLhashListener: true, //紀錄 a 標籤，如上面的 data-hash="slide1"
        startPosition: 'URLHash', // 可為 string / number
        dotsContainer: '.custom-dots', // nav bar 的名稱
        responsiveRefreshRate: 100, // 每多久計算一次 client 瀏覽器寬度
        responsiveClass: true,
        responsive: {   // 不同 width 下的調整
          0: {
            margin: 0,
            autoWidth: false
          },
          768: {
            items: 1,
            autoWidth: false
          },
          992: {
            items: 3,
            autoWidth: false
          },
          1200: {
            items: 4,
            autoWidth: false
          },
        }

    });

    // next.owl.carousel 事件，可以跳轉至下一張 slide
    $('.next').click(function () {
        $(".owl-carousel").trigger('next.owl.carousel')
      
      })

  });