Portfolio = {

  init: function(){
    this.start();
    this.setListeners()
  },

  start: function() {
    $(".main").onepage_scroll({
      animationTime:600,
      responsiveFallback:800,
    })  
  },

  setListeners: function(){
    var $img = $('.img-container')
    if(  $(window).width()  <= 800  ) {
      $img
        .on('click', function(){ $(this).find('.caption').slideToggle('200') })
      } 
    else {
      $img
        .on('mouseenter', function(){ $(this).find('.caption').slideDown('200') })
        .on('mouseleave', function(){ $(this).find('.caption').stop().slideUp('200') })    
    }
  }
}
