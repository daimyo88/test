$(document).ready(function(){	 
  main()
});

var main = function() {
  $('.main-menu-mobile, #mask2').on('click', function() {
  	if ($('.main-menu-mobile').hasClass('active')) {
    	$('.head-top-menu-nav').animate({
      		left: "-250px",
	  		opacity:'0'
    	}, 600);
    	$('#mask2').hide();
		$('.main-menu-mobile span').text('Menu');
		$('.main-menu-mobile').removeClass('active');
  	} else {
    	$('.head-top-menu-nav nav').animate({
      		left: "0",
	  		opacity:'1'
    	}, 600);
    	$('#mask2').show();
		$('.main-menu-mobile').addClass('active');
	}
  });
};
