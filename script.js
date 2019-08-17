function getRandom(min, max) {
  var random = Math.floor(Math.random() * (max + 1 - min)) + min;

  return random;
}

let relFloatingWords=$('.catchcopyContainer p');
let numberOFloatingWords=5;
let indexOfFloatingNow=0;
let nextIndex=1;
function floatTheWords(){
  nextIndex=(indexOfFloatingNow+1)%5;
  indexOfFloatingNow=nextIndex;
  relFloatingWords.each(function(index){
    if(index==nextIndex){
      $(this).addClass('sharp');
    }else{
      $(this).removeClass('sharp');
    }
  });
}
// function patrol(brothers, targetClass) {
//   let nb = 1;
//   let totalNumber = $(brothers).length;
//   $(brothers).each(function(index) {
//
//     if ($(this).hasClass(targetClass)) {
//       nb = (index + 1) % totalNumber;
//       $(this).removeClass(targetClass);
//     }
//   });
//
//   $(brothers).each(function(index) {
//     if (nb === index) {
//       $(this).addClass(targetClass);
//     }
//   });
// }


  let relSlide=$('header .slideLayer .slide');
  let numberOfSlide=3;
  let indexOfPlaying=0;
  let numberOfNext;
  function slideShow(){

    numberOfNext=(indexOfPlaying+getRandom(1,2)) %numberOfSlide;

    relSlide.each(function(index){

      if(index==numberOfNext){
        $(this).addClass('playingSlide').css('display','block');
      }else{
        $(this).removeClass('playingSlide').css('display','none');
      }
    });
    indexOfPlaying=numberOfNext;
  }

// function slideShow(brothers, show) {
//   let zIndex = [];
//   $(brothers).each(function() {
//     zIndex.push(parseInt($(this).css('z-index')));
//   });
//   let length = zIndex.length;
//   let maxIndex = zIndex.indexOf(Math.max.apply(null, zIndex));
//   let randomArray = [];
//   for (i = 0; i < length; i++) {
//     if (i != maxIndex) {
//       randomArray.push(i);
//     }
//   }
//   let nb = randomArray[getRandom(0, randomArray.length - 1)];
//
//   $(brothers).each(function(index) {
//     $(this).removeClass(show);
//     if (index === nb) {
//       $(this).css('z-index', zIndex.length - 1)
//       $(this).addClass(show);
//     } else if (zIndex[index] > zIndex[nb]) {
//       $(this).css('z-index', zIndex[index] - 1)
//     }
//   });
// };

$(function() {
  $('.loadingPage').delay(600).fadeOut(300);
  $('header').css('display', 'flex');
  $('nav').css('display', 'block');
  $('main').css('display', 'block');
  let windowHeight=$('main').offset().top;

  setInterval(function() {
    floatTheWords('.catchcopyContainer p', 'sharp');
  }, 4000);

  setTimeout(function() {
    setInterval(function() {
      slideShow();
    }, 2000);
  }, 1000);

  let relNavigation=$('.navigation div')
  relNavigation.hover(function() {

      $(this).prev().prevAll().addClass('sSize');
      $(this).prev().addClass('rSize')
      $(this).addClass('lSIze sharp');
      $(this).next().addClass('rSize')
      $(this).next().nextAll().addClass('sSize');
    },
    function() {
      relNavigation.removeClass('sSize rSize lSIze sharp');
    });

  $(window).scroll(function() {

    if ($('.navigation').offset().top < $(window).height() * 1.01) {

      $('.navigation').children('div').removeClass('sharp');
      $('.navigation').removeClass('colorNavi');
    } else if ($('.navigation').offset().top < windowHeight * 1.03) {
      $('.navigation').removeClass('colorNavi');


    } else if ($('.navigation').offset().top > windowHeight * 1.03) {
      $('.navigation').children('div').addClass('sharp');
      $('.navigation').addClass('colorNavi');

    } else {
      $('.navigation').children('div').addClass('sharp');

    }
    $('.contents').children('.item').not('slideUpItem').each(function() {
      if ($(this).offset().top - 0.9 * windowHeight < $(window).scrollTop()) {
        $(this).addClass('slideUpItem');
      };
    });
  });
});
