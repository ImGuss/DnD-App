// update character name

$('#character-first-name-input-easy').on('keyup', (event) => {
  $('#char-update-name').html($('#character-first-name-input-easy').val() + ' ' + $('#character-last-name-input-easy').val());
});

$('#character-last-name-input-easy').on('keyup', (event) => {
  $('#char-update-name').html($('#character-first-name-input-easy').val() + ' ' + $('#character-last-name-input-easy').val());
});

// end update character name

// update race
$('#race-input-easy').on('change', (event) => {
  $('#char-update-race').html($('#race-input-easy').val());
});

// update class
$('#class-input-easy').on('change', (event) => {
  $('#char-update-class').html($('#class-input-easy').val());
});

// update background
$('#background-input-easy').on('change', (event) => {
  $('#char-update-background').html($('#background-input-easy').val());
});

// update alignment
$('#alignment-input-easy').on('change', (event) => {
  $('#char-update-alignment').html($('#alignment-input-easy').val());
});
