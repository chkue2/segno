$(function(){
   setTimeout(changeHeader, 200);
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
           $('header').addClass('fixed down');
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
  
  $(document).on('mouseover', '.hl_container', function(){
      $('.hl_container .n').show();
   });

   $(document).on('mouseout', '.hl_container', function(){
      $('.hl_container .n').hide();
   });

   $(document).on('click', 'header .menu', function(){
      var hclass = $('header').attr('class');
      console.log(hclass);

      if(hclass != undefined && hclass != ''){
         var hclassArr = hclass.split(' ');

         for(var i=0; i < hclassArr.length; i++){
            if(hclassArr[i] == 'open'){
               $('header').removeClass('open');
               return false;
            }
         }

         $('header').addClass('open');
      } else {
         $('header').addClass('open');
      }
   });

  function changeHeader() {
      var thisfilefullname = document.URL.substring(document.URL.lastIndexOf("/") + 1, document.URL.length);

      if(thisfilefullname === 'brand.html'){
         $('.hbrand').find('.hline').addClass('on');
         $('header .title').text('BRAND');
      } else if(thisfilefullname === 'product.html' || thisfilefullname === 'segno-90s-serum-8809778670000.html' || thisfilefullname === 'segno-whitening-cream-8809778670017.html' || thisfilefullname === 'segno-whitening-toner-8809778670024.html'){
         $('.hproduct').find('.hline').addClass('on');
         $('header .title').text('PRODUCT');
      } else if(thisfilefullname === 'contact.html'){
         $('.hcontact').find('.hline').addClass('on');
         $('header .title').text('CONTACT');
      }
   }