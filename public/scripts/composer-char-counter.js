$(document).ready(function() {
  const charCount = function() {
    const count = 140 - this.value.length;
    if (count < 0) {
      $('output').css('color', 'red');
    }
    $('output').text(count);
  };
  //Counts character
  $('textarea').on('input', charCount);
});