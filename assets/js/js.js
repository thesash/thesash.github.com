$(window).load($(function()
{
    var elem = $(".stripes");
    var top = elem.offset().top;
    var scrollHandler = function()
    {
      var scrollTop = $(window).scrollTop();
      if (scrollTop<top) {
        elem.css({position:"absolute",top:""})//should be "static" I think
      } else {
        elem.css({position:"fixed",top:"0px"})
      }
    }
    $(window).scroll(scrollHandler);scrollHandler()

}));