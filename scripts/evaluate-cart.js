window.onload = function () {
  //同時document.getElementsByClassName的方法!!；
  if (!document.getElementsByClassName) {
    document.getElementsByClassName = function (cls) {
      var ret = [];
      var els = document.getElementsByTagName("*");
      for (var i = 0; i < els.length; i++) {
        if (
          els[i].className === cls ||
          els[i].className.indexOf(cls + " ") >= 0 ||
          els[i].className.indexOf(" " + cls) >= 0 ||
          els[i].className.indexOf(" " + cls + " ") >= 0
        ) {
          ret.push(els[i]);
        }
      }
      return ret;
    };
  }
  var cartTable = document.getElementById("cartTable");
  var tr = cartTable.children[1].rows; //children節點;
  var checkInputs = document.getElementsByClassName("check");
  var checkAllInput = document.getElementsByClassName("check-all");
  var selectedTotal = document.getElementById("selectedTotal");
  var priceTotal = document.getElementById("priceTotal");
  var selected = document.getElementById("selected");
  var cartFooter = document.getElementById("cartFooter");
  var selectedViewList = document.getElementById("selectedViewList");
  var multiDelete = document.getElementById("multiDelete");
  var allDelete = document.getElementById("allDelete");
  var selectAll = document.getElementsByClassName("selectAll");

  //選擇事件；
  for (var i = 0; i < checkInputs.length; i++) {
    checkInputs[i].onclick = function () {
      if (this.className === "check-all check") {
        //全選；
        for (var j = 0; j < checkInputs.length; j++) {
          checkInputs[j].checked = this.checked;
        }
      }
      if (this.checked == false) {
        for (var k = 0; k < checkAllInput.length; k++) {
          checkAllInput[k].checked = false;
        }
      }
      getTotal();
    };
  }
  selectAll[0].onclick = selectAll[1].onclick = function () {
    for (var k = 0; k < checkAllInput.length; k++) {
      if (checkAllInput[k].checked) {
        checkAllInput[k].checked = false;
      } else {
        checkAllInput[k].checked = true;
      }
    }
    for (var j = 0; j < checkInputs.length; j++) {
      checkInputs[j].checked = checkAllInput[0].checked;
    }
    getTotal();
  };

  //計算；
  function getTotal() {
    var selected = 0;
    var price = 0;
    var HTMLstr = "";
    for (var i = 0; i < tr.length; i++) {
      var perCount = tr[i].getElementsByTagName("input")[1].value;
      if (tr[i].getElementsByTagName("input")[0].checked) {
        tr[i].className = "on";
        selected += parseInt(tr[i].getElementsByTagName("input")[1].value);
        price += parseFloat(tr[i].cells[4].innerHTML);
        HTMLstr +=
          '<div><img src="' +
          tr[i].getElementsByTagName("img")[0].src +
          '"/><span class="selCount">' +
          perCount +
          '</span><span class="del" index="' +
          i +
          '">刪除</span></div>';
      } else {
        tr[i].className = " ";
      }
    }
    selectedTotal.innerHTML = selected;
    priceTotal.innerHTML = price;
    selectedViewList.innerHTML = HTMLstr;
    //如果是0??；
    if (selected == 0) {
      cartFooter.className = "cartFooter";
    }
  }

  //已經選擇顯示隱藏；
  selected.onclick = function () {
    if (cartFooter.className == "cartFooter") {
      if (selectedTotal.innerHTML != 0) {
        cartFooter.className = "cartFooter show";
      }
    } else {
      cartFooter.className = "cartFooter";
    }
  };

  //取消選擇 ---> 事件
  selectedViewList.onclick = function (e) {
    e = e || window.event;
    var el = e.srcElement;
    if (el.className == "del") {
      var index = el.getAttribute("index");
      var input = tr[index].getElementsByTagName("input")[0];
      input.checked = false;
      input.onclick();
    }
  };

  //加減事件；
  for (var i = 0; i < tr.length; i++) {
    //加减按鈕；
    tr[i].onclick = function (e) {
      e = e || window.event;
      document.onselectstart = new Function("event.returnValue=false;");
      var el = e.target || e.srcElement;
      var cls = el.className;
      var input = this.getElementsByTagName("input")[1];
      var val = parseInt(input.value);
      var reduce = this.getElementsByTagName("span")[3];
      switch (cls) {
        case "add":
          input.value = val + 1;
          reduce.innerHTML = "刪 除";
          getSubtotal(this);
          break;
        case "reduce":
          if (val > 1) {
            input.value = val - 1;
            getSubtotal(this);
          }
          if (input.value <= 1) {
            reduce.innerHTML = "刪 除";
          }
          break;
        case "deleteOne":
          //單行删除；
          var conf = confirm("確定要刪除嗎？");
          if (conf) {
            this.parentNode.removeChild(this);
          }
          break;
        default:
          break;
      }
      getTotal();
    };
    //input輸入事件；
    tr[i].getElementsByTagName("input")[1].onkeyup = function () {
      var val = parseInt(this.value);
      var tr = this.parentNode.parentNode;
      var reduce = tr.getElementsByTagName("span")[3];
      if (isNaN(val) || val < 1) {
        val = 1;
      }
      this.value = val; //輸入控制
      if (val <= 1) {
        reduce.innerHTML = "";
      } else {
        reduce.innerHTML = "-";
      }
      getSubtotal(tr);
      getTotal();
    };
  }
  //金額小計
  function getSubtotal(tr) {
    var tds = tr.cells;
    var price = parseFloat(tds[2].innerHTML);
    var count = tr.getElementsByTagName("input")[1].value;
    var subTotal = parseFloat(price * count);
    tds[4].innerHTML = subTotal;
  }

  //删除；
  multiDelete.onclick = function () {
    if (selectedTotal.innerHTML != "0") {
      var conf = confirm("確定要刪除嗎？");
      if (conf) {
        cartDel();
        getTotal();
      }
    }
  };
  allDelete.onclick = function () {
    var conf = confirm("確定要清空購物車嗎？");
    if (conf) {
      checkAllInput[0].checked = true;
      checkAllInput[0].onclick();
      cartDel();
      getTotal();
    }
  };
  function cartDel() {
    for (var i = 0; i < tr.length; i++) {
      var input = tr[i].getElementsByTagName("input")[0];
      if (input.checked) {
        tr[i].parentNode.removeChild(tr[i]);
        i--; //!!删除時注意i 的變化!!；
      }
    }
  }
};
