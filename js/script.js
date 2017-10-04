function prepend(selector, message) {
  return $(selector).prepend('<li>' + message + '</li>');
}

$('a#hello').click(function() {
  prepend('ul#user', 'Hello!');
  prepend('ul#webpage', 'Why hello there!');
  // old code
  // $('ul#user').prepend('<li>Hello!</li>');
  // $('ul#webpage').prepend('<li>Why hello there!</li>');
  $('ul#user').children('li').first().click(function() {
    $(this).remove();
  });
  $('ul#webpage').children('li').first().click(function() {
    $(this).remove();
  });
});

$('a#goodbye').click(function() {
  prepend('ul#user', 'Goodbye!');
  prepend('ul#webpage', 'Goodbye, dear user!');
  // old code
  // $('ul#user').prepend('<li>Goodbye!</li>');
  // $('ul#webpage').prepend('<li>Goodbye, dear user!</li>');
  $('ul#user').children('li').first().click(function() {
    $(this).remove();
  });
  $('ul#webpage').children('li').first().click(function() {
    $(this).remove();
  });
});

$('a#stop').click(function() {
  prepend('ul#user', 'Stop copying me!');
  prepend('ul#webpage', 'pardon me. I meant no offense.');
  // old code
  // $('ul#user').prepend('<li>Stop copying me!</li>');
  // $('ul#webpage').prepend('<li>Pardon me. I meant no offense.</li>');
  $('ul#user').children('li').first().click(function() {
    $(this).remove();
  });
  $('ul#webpage').children('li').first().click(function() {
    $(this).remove();
  });
});
