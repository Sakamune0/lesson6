// <script>
$(function(){
$('.q-item').click(function(){
  var $answer = $(this).find('.answer');
  var $up = $(this).find('.up');
  var $down = $(this).find('.down');
  if($answer.hasClass ('open')){
    $answer.removeClass('open');
    $answer.slideUp();
    $up.hide();
    $down.show();
  }else{
      $answer.addClass ('open');
      $answer.slideDown();
      $up.show();
      $down.hide();
  }
});
});
// </script>
