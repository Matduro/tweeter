$(document).ready(function() {
  const charCount = function() {
    const count = 140 - this.value.length;
    $('output').text(count);
  };
  //Counts character
  $('textarea').on('input', charCount);
});