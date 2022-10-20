$(document).ready(function(){
    $('.rolling_pics .middle a:first-child').css('height',`290px`);
    $('.rolling_pics .middle a:last-child').css('height',`0px`).prependTo('.rolling_pics .middle');
    $('.rolling_pics .left a:first-child').css('height',`290px`);
    $('.rolling_pics .left a:last-child').css('height',`0px`).prependTo('.rolling_pics .left');
    $('.rolling_pics .right a:first-child').css('height',`290px`);
    $('.rolling_pics .right a:last-child').css('height',`0px`).prependTo('.rolling_pics .right');

    setInterval(function(){
        $('.rolling_pics .left a:first-child').css('height',`290px`);
        $('.rolling_pics .left a:last-child').css('height',`0px`).prependTo('.rolling_pics .left');
    }, 3000)
    setInterval(function(){
        $('.rolling_pics .middle a:first-child').css('height',`290px`);
        $('.rolling_pics .middle a:last-child').css('height',`0px`).prependTo('.rolling_pics .middle');
    }, 5000)
    setInterval(function(){
        $('.rolling_pics .right a:first-child').css('height',`290px`);
        $('.rolling_pics .right a:last-child').css('height',`0px`).prependTo('.rolling_pics .right');
    }, 3000)

});



// most recom

// Reference to DOM Elements
window.addEventListener("load", function(){console.log("next")});
const prevBtn = document.querySelector("#flip_comment_prev_btn");
const nextBtn = document.querySelector("#flip_comment_next_btn");
const flipBook = document.querySelector("#flip_comment_book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPages = 4;
let maxLocation = numOfPages + 1;

function openBook(){
    flipBook.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}
function closeBook(){
    flipBook.style.transform = "translateX(0%)";
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}
function reverseCloseBook(){
    flipBook.style.transform = "translateX(100%)";
}

function goNextPage(){
    console.log("next");
    if(currentLocation < maxLocation){
        switch(currentLocation){
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex =1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex =2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex =3;
                break;
            case 4:
                reverseCloseBook();
                paper4.classList.add("flipped");
                paper4.style.zIndex =4;
                break;
        }
        currentLocation++;
    }
}
function goPrevPage(){
    if(currentLocation > 1){
        switch(currentLocation){
            case 2:
                closeBook();
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 4;
                console.log('last');
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 3;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 2;
                break;
            case 5:
                openBook();
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 1;
                console.log('last');
                break;      
        }
        currentLocation--;
    }else{
        closeBook();
    }
}