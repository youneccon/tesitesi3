$(function(){
  console.log('header top_____'+$('header').offset().bottom);
  console.log('nav_top_____'+$('nav').offset().top);
  console.log('nav_bottom____'+$('nav').offset().bottom);
  console.log('main__top___'+$('main').offset().top);
    function getRandom(min, max) {
    var random = Math.floor(Math.random() * (max + 1 - min)) + min;

    return random;
  }

  function patrol(brothers, targetClass) {
    let nb = 1;
    let totalNumber = $(brothers).length;
    $(brothers).each(function(index) {

      if ($(this).hasClass(targetClass)) {
        nb = (index + 1) % totalNumber;
        $(this).removeClass(targetClass);
      }
    });

    $(brothers).each(function(index) {
      if (nb === index) {
        $(this).addClass(targetClass);
      }
    });
  }

  function slideShow(brothers, show) {
    let zIndex = [];
    $(brothers).each(function() {
      zIndex.push(parseInt($(this).css('z-index')));
    });
    let length = zIndex.length;
    let maxIndex = zIndex.indexOf(Math.max.apply(null, zIndex));
    let randomArray = [];
    for (i = 0; i < length; i++) {
      if (i != maxIndex) {
        randomArray.push(i);
      }
    }

    let nb = randomArray[getRandom(0, randomArray.length - 1)];

    $(brothers).each(function(index) {
      $(this).removeClass(show);
      if (index === nb) {
        $(this).css('z-index', zIndex.length - 1)
        $(this).addClass(show);
      } else if (zIndex[index] > zIndex[nb]) {
        $(this).css('z-index', zIndex[index] - 1)
      }
    });

  };

  setInterval(function() {
    patrol('.catchcopyContainer p', 'sharp');
  }, 4000);

  setTimeout(function() {
    setInterval(function() {
      slideShow(".slide", 'playingSlide');
    }, 10000);
  }, 5000);
    $('.navigation').children('div').hover(function() {

    $(this).prev().prevAll().addClass('sSize');
    $(this).prev().addClass('rSize')
    $(this).addClass('lSIze sharp');
    $(this).next().addClass('rSize')
    $(this).next().nextAll().addClass('sSize');
  },
  function() {
    $(this).parent().children().removeClass('sSize rSize lSIze sharp');
  });
});
