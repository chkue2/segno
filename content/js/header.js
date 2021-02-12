$(function(){
    //Keep track of last scroll
    var lastScroll = 0;
    $(window).scroll(function(event){
        //Sets the current scroll position
        var st = $(this).scrollTop();
        //Determines up-or-down scrolling
        if (st < 150){
         $('header').removeClass('fixed up');
        }
        else if (st > lastScroll){
           //Replace this with your function call for downward-scrolling
           //console.log('down');
           $('header').removeClass('up');
           $('header').addClass('down');
        }
        else {
           //Replace this with your function call for upward-scrolling
           //console.log("UP");
           $('header').removeClass('down');
           $('header').addClass('fixed up');
        }
        //Updates scroll position
        lastScroll = st;
    });
  });