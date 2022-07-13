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