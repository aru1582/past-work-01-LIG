$(function(){
  $('.slick').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
});

$(function(){
  $('.nav-btn').on('click',function(){
    if( $(this).hasClass('active') ){
     // if条件１があったときの処理
     // hasClassは、クリックしたときにactive要素があるかどうか調べている。
    $(this).removeClass('active');
     // removeClassは、クリックしたときにactive要素を消す働きがある。
    $('.header-nav').addClass('close').removeClass('open');
     // addClassは、クリックしたときに要素を追加できる。
  }
    else {
       // 条件がなかった場合の処理
    $(this).addClass('active');
    $('.header-nav').addClass('open').removeClass('close');
  }
});
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});