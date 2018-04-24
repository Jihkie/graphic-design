$(document).ready(() => {
  $('.link').on("click", () => {
    var panelName = $(this).attr('info');
    $('.panel').hide(0, function(){
      $('.'+panelName).show();
    });
  });
  
  
  
  
  
  $('.intro').show();
  
  
});
