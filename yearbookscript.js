$(document).ready(() => {
	//$('.panel').css('left', '-100px');
  $('.link').click(function() {
    console.log($(this).attr('info'));
    var panelName = $(this).attr('info');
    console.log(panelName);

    var $panelHide = $('.panel:visible:not(#' + panelName + ')');
    var $panelShow = $('#' + panelName + ':hidden');

    var $thisPanel = $('#' + panelName);
    //alert($thisPanel);
    console.log($panelShow.outerWidth());
    $panelShow.css('left', -$panelShow.outerWidth() + 'px').css({'overflow-y': 'hidden', 'padding-right': '15px'}).show().animate({
      left: 0
    }, 1000, function(){$panelShow.css({'overflow-y':'', 'padding-right':'5px'});});
    $panelHide.css({'overflow-y': 'hidden', 'padding-right': '15px'}).fadeOut(500, function(){
    	$panelHide.css('left', -$panelHide.outerWidth() + 'px');
    });
    
    


    /*
    $('.panel:visible:not(.' + panelName + ')').fadeOut(500, function() {
      console.log('out');
    });
    $('.' + panelName + ':hidden').fadeIn(500, function() {
      console.log('in');
    });
    //console.log('out2');*/
  });

  /*var $lefty = $(this).next();
  $lefty.animate({
    left: parseInt($lefty.css('left'), 10) == 0 ? -$lefty.outerWidth() : 0
  });*/




  //$('.intro').show();


});
