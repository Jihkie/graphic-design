$(document).ready(() => {
  $('.link').click(function(){
    var panelName = $(this).attr('info');
    $('.panel').hide(500, function(){
      $('.'+panelName).show(500);
    });
  });
  
  
  
  
  
  $('.intro').show();
  
  
});
