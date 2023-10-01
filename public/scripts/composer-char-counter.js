$(document).ready(function() {
  const maxChars = 140;
  const counterElem = $('.new-tweet .counter'); //traverse to find the counter

  $('.new-tweet textarea').on('input', function() {
    const numChars = $(this).val().length;
    const charsRemaining = maxChars - numChars;

    if (charsRemaining < 0) {
      counterElem.css('color', 'red'); //turns red if numChars is over 140
    } else {
      counterElem.css('color', ''); //reset to default color
    }

    //display the character count
    counterElem.text(charsRemaining);
  });
});