$(document).ready( () => {

  $('#pass-word-sign-up-confirm').on('keyup', (e) => {
    if ( $('#pass-word-sign-up-confirm').val() !== $('#pass-word-sign-up').val() ) {
      $('#hide').removeClass('hide');
      $('#submit-signup').attr('disabled', 'true');
    }
    else {
      $('#hide').addClass('hide');
      $('#submit-signup').removeAttr('disabled');
    }
  });


  $('#signup-password-input-confirm').on('keyup', (e) => {
    if ( $('#signup-password-input-confirm').val() !== $('#signup-password-input').val() ) {
      $('#hide-nav').removeClass('hide');
      $('#nav-submit-signup').attr('disabled', 'true');
    }
    else {
      $('#hide-nav').addClass('hide');
      $('#nav-submit-signup').removeAttr('disabled');
    }
  });


  $('#edit-password-confirm').on('keyup', (e) => {
    if ( $('#edit-password-confirm').val() !== $('#edit-password').val() ) {
      $('#hide-edit').removeClass('hide');
      $('#edit-submit').attr('disabled', 'true');
    }
    else {
      $('#hide-edit').addClass('hide');
      $('#edit-submit').removeAttr('disabled');
    }
  });

});
