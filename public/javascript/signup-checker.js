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

});
