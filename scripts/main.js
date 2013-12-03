Portfolio = {

  init: function(){
    this.start();
    this.setListeners()
  },

  formatForMobile: function() {
    $('nav').css("position", "relative").css("margin", "0");
    $('body').css("padding", "0");
    $('.disabled-onepage-scroll').css('overflow-x','hidden')
    $('.navbar-text').css("margin-left", "25px");
    $('.main .row .container').css("width","100%").css("margin", "0").css("box-shadow", "0 0 0")
  },

  start: function() {
    $(".main").onepage_scroll({
      animationTime:600,
      responsiveFallback:800
    })  
  },

  setListeners: function(){
    var $img = $('.img-container')
    if(  $(window).width()  <= 800  ) {
      this.formatForMobile()
    } 
    else {
    $img
      .on('mouseenter', function(){ $(this).find('.caption').slideDown('200')})
      .on('mouseleave', function(){ $(this).find('.caption').slideUp('200')})    
    }
  }
}
