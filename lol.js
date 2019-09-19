$(document).ready(function() {
  setInterval(function (){
    if ($('.picture1').hasClass('active')){
      $('.trans').find('a.replace').removeClass('replace'); 
      $('.trans').find('a#first').addClass('replace')
    } else if ($('.picture2').hasClass('active')) {
      $('.trans').find('a.replace').removeClass('replace'); 
      $('.trans').find('a#second').addClass('replace')
    } else if ($('.picture3').hasClass('active')) {
      $('.trans').find('a.replace').removeClass('replace'); 
      $('.trans').find('a#third').addClass('replace')
    } else if ($('.picture4').hasClass('active')) {
      $('.trans').find('a.replace').removeClass('replace'); 
      $('.trans').find('a#fourth').addClass('replace')
    } else if ($('.picture5').hasClass('active')) {
      $('.trans').find('a.replace').removeClass('replace'); 
      $('.trans').find('a#fifth').addClass('replace')
    }
  }, 100)
  
});

