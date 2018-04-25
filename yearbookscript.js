$(document).ready(() => {
  $('.link').click(function(){
    console.log($(this).attr('info'));
    var panelName = $(this).attr('info');
    console.log(panelName);
    $('.panel').fadeOut(500, function(){
      console.log('out');
      $('.'+panelName).fadeIn(500, console.log('in'););
    });
  });
  
  
  
  
  
  $('.intro').show();
  
  
});
