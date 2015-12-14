var $switch = $('.sw');
var $switchLabel = $('#switch-label');

function isSwitchChecked() {
  return $switch.is(':checked');
}

function toggleSwitchText() {
  if (isSwitchChecked()) {
    $switchLabel.text('switch to light mode');
    setTimeout(function() {
      alert('Please uncomment the darkMode option within index.html and refresh this page to active dark mode.');
    }, 500);
  } else {
    $switchLabel.text('switch to dark mode');
    setTimeout(function() {
      alert('Please comment out the darkMode option within index.html and refresh this page to active light mode.');
    }, 500);
  }
}

$switch.change(function() {
  // Change the theme
  $('body').toggleClass('invert');
  $('.title').toggleClass('title--invert');
  $('.credits a').toggleClass('link--invert');
  toggleSwitchText();
});
