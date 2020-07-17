$(function() {
  btnClose();
  btnHam();

  gnb();
  customOrder();
  orderCount();
  cart();
  order();
  modalClose();
  // customGetUrl();
  findAddr(); //
  pcGnb();
  orderOnname(); //
  mypageMenu();

  $('.visualHome .slick').slick({
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  })

  $('.module-bestSeller .slick').slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000
  })


  $('.Detail .smallImg .slick').slick({
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: 0,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000
  });
  $('.Detail .smallImg').find('li').click(function() {
    var $src = $(this).find('img').attr('src');
    $('.Detail .bigImg').find('img').attr('src', $src);
  });

  $(window).scroll(function() {
    var nowPos = $(this).scrollTop();

    // $('.floatRight').hide();

    if (nowPos > 150) {
      $('#pageHeader').addClass('sticky');
      // $('.floatRight').fadeIn();
    } else {

      $('#pageHeader').removeClass('sticky');
      // $('.floatRight').fadeOut();
    }
  });

  viewTerms();

  scrollBtn();
  othersTabMenu(); // custom order tab menu

});

function othersTabMenu() {
  // customOrder Others tab menu
  var $btn = $('.otherProduct .tabMenu .tabBtn');
  $btn.on('click', function() {
    $btn.removeClass('on');
    $(this).addClass('on');
  })
}

function scrollBtn() {
  var $bottom = $('.bottomPosition');

  $('.btnTop').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 400);
    return false;
  });

  $('.btnBottom').click(function() {
    $('html, body').animate({
      scrollTop: $bottom.offset().top
    }, 400);
    return false;
  })
};



function viewTerms() {
  var $btn = $('.Join .viewTerms'),
    $terms = $('.modalTerms'),
    $close = $('.closeTerms'),
    $bg = $('.bgLayer');

  $btn.on('click', function() {
    $bg.fadeIn();
    $terms.fadeIn();

    if ($(this).hasClass('a')) {
      $('.terms1').addClass('on');
      $('.terms2').removeClass('on');
    } else {
      $('.terms2').addClass('on');
      $('.terms1').removeClass('on');
    }
  })

  $close.on('click', function() {
    $bg.fadeOut();
    $terms.fadeOut();
  })
}

function mypageMenu() {
  var $count = $('.Mypage').find('.menuCount').text();
  $('.Mypage .lnb li').eq($count - 1).addClass('on');

}

function pcGnb() {
  var $gnb = $('.gnbWrap .items');

  $gnb.on('mouseenter', function() {
    $(this).find('.sub').fadeIn(300);
    //    $gnb.stop().animate({
    //         height: 150
    //     },300)
  })

  $gnb.on('mouseleave', function() {
    $(this).find('.sub').fadeOut(100);
  })
}

// 20191124 異붽�
function findAddr() {
  var $btn = $('.findAddress'),
    $pop = $('.modalPop.address'),
    $bg = $('.bgLayer');

  $btn.on('click', function() {
    console.log($(this));
    $bg.fadeIn(100);
    $pop.fadeIn(300);
  })

  if ($bg) {
    $bg.click(function() {
      $(this).fadeOut(100);
      $pop.fadeOut(100);

      $('.customPopList').fadeOut(100);
      $('.btnFixBack').fadeOut(100);
      $('.modalWhite').fadeOut(100);
    })
  }
}


function customGetUrl() {
  var $headSrc = $('.customCategory .head a'),
    $strapSrc = $('.customCategory .strap a');
  $view = $('.customView'),
    $heads = $view.find('.head img'),
    $strap = $view.find('.strap img'),
    $buckle = $view.find('.buckle .photo img');

  $headSrc.each(function() {
    var $imgUrl = $(this).find('img').attr('src');
    $(this).attr('href', $imgUrl);

  });

  $strapSrc.each(function() {
    var $imgUrl = $(this).find('img').attr('src').split('.');
    $(this).attr('href', $imgUrl[0] + 'v.' + $imgUrl[1]);

    // Buckle

  });

  $headSrc.click(function(e) {
    e.preventDefault();
    var state = $(this).parents('.head'),
      $urlNow = $(this).attr('href');
    if (state) {
      $heads.attr('src', $urlNow);
    }

  })
  $strapSrc.click(function(e) {
    e.preventDefault();
    var state = $(this).parents('.strap'),
      $urlNow = $(this).attr('href');
    if (state) {
      $strap.attr('src', $urlNow);
    }

    var $bUrl = $(this).find('img').attr('src').split('_s');

    $buckle.attr('src', $bUrl[0] + '_l' + $bUrl[1]);

  })
}


function orderOnname() {
  var $bg = $('.bgLayer'),
    $onName = $('.onNamePopup'),
    $btn = $('.customOnname .openpop').find('button.open');
  $btn.on('click', function() {
    $bg.fadeIn();
    $onName.fadeIn();
  });

  $('.btnFixBack').on('click', function() {
    $bg.fadeOut();
    $(this).parents('.modalWhite').fadeOut();
  });
  $('.btnCancel').on('click', function() {
    $bg.fadeOut();
    $(this).parents('.modalWhite').fadeOut();
  });
}


function modalClose() {
  var $bg = $('.bgLayer');
  $('.btnChange').on('click', function() {
    var state = $(this).parents('.customCategory').hasClass('Head');
    $bg.fadeIn();
    $('.btnFixBack').fadeIn();
    if (state) {
      $('.customPopList.Head').fadeIn(300);
    } else {
      $('.customPopList.Strap').fadeIn(300);
    }
  })

  $('.btnFixBack').on('click', function() {
    $bg.fadeOut();
    $(this).parents('.modalWhite').fadeOut();
  });

}

function order() {
  var $btn = $('.btnOpen'),
    $view = $('.openView');

  $btn.on('click', function() {
    $(this).parent().siblings('.openView').toggleClass('on');
  })
}

function cart() {
  var $btn = $('.btnItemDel');

  $btn.click(function() {
    $(this).parents('.orderItem').parent().remove();
  });
}


function orderCount() {
  var $btn = $('.countWrap .btn'),
    count = 1;

  $btn.on('click', function() {
    console.log('hello');
    if ($(this).hasClass('down')) {
      if (count != 1) {
        count -= 1;
      }

    } else if ($(this).hasClass('up')) {
      count += 1;
    }

    $(this).parent().find('input.countNum').val(count);
  })
}


function btnClose() {
  var $btn = $('a.btnClose');
  $btn.on('click', function() {
    $(this).parent().fadeOut();
  })
}

function btnHam() {
  var $btn = $('.btnHam'),
    $gnb = $('.Gnb'),
    $bg = $('.gnbBg');

  $btn.on('click', function() {

    $(this).toggleClass('open');
    var now = $(this).hasClass('open');
    console.log(now);
    if (now) {
      $bg.fadeIn();
      $gnb.stop().animate({
        left: 0
      }, 300);
    } else {
      $bg.fadeOut();
      $gnb.stop().animate({
        left: '-105%'
      }, 100)
    }
  })
}

function gnb() {
  var $menu = $('.Gnb .main > li > a'),
    $sub = $('.Gnb .sub');
  $menu.click(function() {
    var bool = $(this).next().hasClass('sub');
    if (bool) {
      $(this).parent().siblings('li').find('.sub').slideUp();
      $(this).next().stop().slideToggle();
    }

  })
}

function customOrder() {
  var $menu = $('.CustomOrder .depth1 > li > a');
  $menu.click(function() {

    $(this).parent().siblings().find('.menu').removeClass('on');
    $(this).addClass('on');
    var i = $(this).parent().index();
    $('.depth1 > li').eq(i).find('.depth2 li:first-child a').addClass('on');
  })
}
