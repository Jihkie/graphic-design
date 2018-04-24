$(document).ready(() => {
  $('.link').click(function(){
    var panelName = $(this).attr('info');
    $('.panel').hide(0, function(){
      $('.'+panelName).show();
    });
  });
  
  
  
  
  
  $('.intro').show();
  
  
});
