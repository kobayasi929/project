$(function(){
    $("ul.menu li").hover(
        function() {
            $(".submenu:not(:animated)", this).slideDown(500);
           
        },
        function() {
            $(".submenu", this).slideUp(500);
        }
    );

    $("ul.menu-info li").hover(
        function() {
            $(".submenu:not(:animated)", this).slideDown(500);
          
        },
        function() {
            $(".submenu", this).slideUp(500);
        }
    );

    $(".menu-num ").hover(
        function() {
            $(".submenu:not(:animated)", this).slideDown(500);
            $(".submenu",this).css('display', 'contents');
        },
        function() {
            $(".submenu", this).slideUp(300);
        }
    );

});

//ここから
function twoDigit(num) {
    let ret;
    if( num < 10 ) 
      ret = "0" + num; 
    else 
      ret = num; 
    return ret;
  }
  function showClock() {
  var hiduke=new Date(); 

  //年・月・日・曜日を取得する
  var year = hiduke.getFullYear();
  var month = hiduke.getMonth()+1;
  var week = hiduke.getDay();
  var day = hiduke.getDate();

  var yobi= new Array("日","月","火","水","木","金","土");
    document.getElementById("realtime").innerHTML = year+"年"+month+"月"+day+"日 "+yobi[week]+"曜日";
  }
  setInterval('showClock()',100);

  $(function() {
    var topBtn = $('#page-top');   
    topBtn.hide();
    //スクロールが100pxに達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});