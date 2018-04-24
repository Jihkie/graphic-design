$(document).ready(() => {
  $('.link').on("click", () => {
    $('.panel').hide(0, function(){
      var panelName = $(this).attr('info');
      $('.'+panelName).show();
    });
  });
  
  
  
  
  
  $('.intro').show();
  
  
});
