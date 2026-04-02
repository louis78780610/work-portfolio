//スティッキーヘッッダー
$(function(){
    var $win = $(window),
    $fv = $('.fv'),
    $header = $('.header'),
    fvHeight = $fv.outerHeight();
    fixedClass = 'fixed';

$win.on('load scroll',function(){
    var value = $(this).scrollTop();
    if($win.width() > 768){
        if( value > fvHeight){
            $header.addClass(fixedClass);
        }else{
            $header.removeClass(fixedClass);
        }
    }
});
});

//ハンバーガー
$('.burger-btn').on('click',function(){
    $('.header-nav').fadeToggle(300);
    $(this).toggleClass('cross');
    $('body').toggleClass('noscroll');
});

//フェードイン
$(function(){
    $(window).scroll(function(){
        $('.fadein').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if(scroll > position - windowHeight + 200){
                $(this).addClass('active');
            }
        });
    });
});