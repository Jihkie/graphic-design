$(document).ready(() => {
  $('.link').click(function(){
    console.log($(this).attr('info'));
    var panelName = $(this).attr('info');
    console.log(panelName);
    $('.panel').fadeOut(500, function(){
      $('.'+panelName).fadeIn(500);
    });
  });
  
  
  
  
  
  $('.intro').show();
  
  
});
