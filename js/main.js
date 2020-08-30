'use strict'

$(document).ready(function(){


  //owl-carousel

  $('.site-main .container .owl-carousel').owlCarousel({ //owlCarsel適用するにはこう書くよ
    loop: true, //くるくるさせる
    autoplay: 2000, //自動でくるくる
    slideSpeed: 300,
    dots: true, //カード下に次の画像にまわすドット配置
    responsive:{
      0:{　　//一度にどれくらいの幅で何枚表示させるか、必ず0pxから
        items:1
      },
    }

  })

  //画像拡大
  $('.goods .goods-img-a').magnificPopup({
    type: 'image'　//画像１枚だけ浮かび上がらせたいのならこれかけば✖︎ボタンが出るようになる
  });

  //スクロール設定

  var headerbottom = $('.header_area').height() +150;

  function navbarFixed(){
    if($('.header_area').length){
      $(window).scroll(function(){
        if($(window).scrollTop() >= headerbottom){
          $('.main-menu').addClass('fixed-top');
        }else{
          $('.main-menu').removeClass('fixed-top');
        }
      });
    }
  }
  navbarFixed();

});

window.onload = function(){
  var btn = document.getElementById('btn');
  btn.addEventListener('click', function(){
    var result = window.confirm('送信します、よろしいですか？');

    if(result){
      return true;
    }else{
      window.alert('キャンセルされました');
      return false;
    }
  })
}