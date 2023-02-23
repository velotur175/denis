$(function(){

   $('.menu__button, .menu__link, .header-top__language').on('click', function(){
    $('.header__top').toggleClass('header__top--active');
    $('body').toggleClass('lock');
  });
  
    $window = $(window);
    $window.scroll(function() {
    $scrollPosition = $window.scrollTop();
    if ($scrollPosition > 50) {
      $('.header__top').addClass('header__top--bg');
    } else {
      $('.header__top').removeClass('header__top--bg');
    }
  });

  $('.menu__link').on("click", function(event){
    event.preventDefault();
    const scrollAnchor = $(this).attr('href');
    let scrollPoint = $(scrollAnchor).offset().top;

    if(scrollAnchor === '#about, #skills, #portfolio, #contacts') {
      scrollPoint = scrollPoint - 90;
    } 
    if(scrollAnchor === '#skills') {
      scrollPoint = scrollPoint - 90;
    } 
    if(scrollAnchor === '#portfolio, #contacts') {
      scrollPoint = scrollPoint - 90;
    } 
    if(scrollAnchor === '#contacts') {
      scrollPoint = scrollPoint - 90;
    } 

    $('html, body').animate({scrollTop: scrollPoint}, 2000);
    return false;
  });
});