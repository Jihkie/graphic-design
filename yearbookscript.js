$(document).ready(() => {
  $('.link').click(function(){
    console.log($(this).attr('info'));
    var panelName = $(this).attr('info');
    console.log(panelName);
    $('.panel:visible:not(.'+panelName+')').fadeOut(500, function(){
      console.log('out');
    });
    $('.'+panelName+':hidden').fadeIn(500, function(){console.log('in');});
      //console.log('out2');
  });
  
  
  
  
  
  //$('.intro').show();
  
  
});
