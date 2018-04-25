$(document).ready(() => {
  $('.link').click(function(){
    var panelName = $(this).attr('info');
    $('.panel').fadeOut(500, function(){
      $('.'+panelName).fadeIn(500);
    });
  });
  
  
  
  
  
  $('.intro').show();
  
  
});
