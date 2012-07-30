$(window).load($(function()
{
    var elem = $(".stripes");
    var top = elem.offset().top;
    var scrollHandler = function()
    
    {
      var scrollTop = $(window).scrollTop();
      if (scrollTop>top) {
        $('.stripes').addClass('stick')
      } else {
        $('.stripes').removeClass('stick')
      }
    }
    $(window).scroll(scrollHandler);scrollHandler()

}));
