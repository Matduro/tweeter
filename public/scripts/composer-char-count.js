$(document).ready(function() {
  const charCount = function() {
    const count = 140 - this.value.length;

    if (count < 26 && count >= 0) {
      $('output').css('color', '#FF7F50');
    } else if (count < 0) {
      $('output').css('color', 'red');
    } else if (count >= 26) {
      $('output').css('color', '');
    }
    $('output').text(count);
  };
  //Counts character
  $('textarea').on('input', charCount);
});