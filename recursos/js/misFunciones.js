$(document).ready(function(){
    $('.goup').hide();
    $('.goup').click(function() {
        $('body,html').animate({
            scrollTop:0
        },1000)
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() &gt; 200) {
                $('.goup').fadeIn();
        }
        else {
                $('.goup').fadeOut();
        }
    });
});