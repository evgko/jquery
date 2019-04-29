$(document).ready(function() {
    $('.modal').css({display: "block"});
    $('.modal').css("top", "-550px");
    $('.main_btna, .main_btn, .main_nav li:eq(1)').on('click', function(){
       
        $('.modal').animate(
            {
                marginTop: "650px"
            },
          2000);
          
        $('.overlay').fadeIn(2000);

    });
    
    $('.close').on('click', function(){
        $('.modal').animate(
            {
                marginTop: "-550px"
            },
          2000);
        $('.overlay').fadeOut(2000);
    });

});