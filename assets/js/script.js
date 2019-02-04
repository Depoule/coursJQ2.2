// au double clic l'image change de taille
$(document).ready(function(){
  $('#image').dblclick(function() {
    // this correspond à l'image, on applique le css à #image
  $(this).css('width', '500px');
});
});
