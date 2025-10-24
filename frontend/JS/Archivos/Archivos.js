$(document).ready(function(){
  var zindex = 10;
  
  $("div.card").click(function(e){
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.cards").hasClass("showing")) {
   
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
        
        $("div.cards")
          .removeClass("showing");
      } else {
       
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
     
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }
    
  });


  $('.card-actions .btn').on('click', function (e) {
    
    e.stopPropagation();

    var href = this.getAttribute('href') || '';
    if (!href || href === '#') {
     
      e.preventDefault();
      var cardHref = $(this).closest('.card').data('href');
      if (cardHref) {
        window.location.href = cardHref;
      }
    }
  
  });
});

$(function () {
  var $fabMenu = $('.fab-menu');
  var $fabBtn = $('#fab-toggle');
  var $panel = $('#quick-panel');
  var $loginBtn = $('#btn-login');

  function closePanel() {
    $fabMenu.removeClass('open');
    $fabBtn.attr('aria-expanded', 'false');
    $panel.attr('aria-hidden', 'true');
  }

  function openPanel() {
    $fabMenu.addClass('open');
    $fabBtn.attr('aria-expanded', 'true');
    $panel.attr('aria-hidden', 'false');
  }


  $fabBtn.on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if ($fabMenu.hasClass('open')) {
      closePanel();
    } else {
      openPanel();
    }
  });


  $(document).on('click', function (e) {
    if ($fabMenu.hasClass('open') && $(e.target).closest('.fab-menu').length === 0) {
      closePanel();
    }
  });


  $(document).on('keydown', function (e) {
    if (e.key === 'Escape') closePanel();
  });

  
  $loginBtn.on('click', function (e) {
    e.preventDefault();
    window.location.href = 'login-register.html';
  });
});