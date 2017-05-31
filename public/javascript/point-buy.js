$(document).ready( () => {
  const allPointBuys = $('#point-buy input');
  for (let i = 0; i < allPointBuys.length; i++) {
    $(allPointBuys[i]).attr('value', '8');
  }
});


$('.minus-button').click( (e) => {
  e.preventDefault();

  const currentInput = $(e.currentTarget).parent().prev()[0];

  let minusInputValue = $(currentInput).val();

  let pointBuyTotal = $('#point-buy-total').html();

  if (minusInputValue > 8) {
    minusInputValue --;
    pointBuyTotal ++;
    $($(e.currentTarget).next()).removeAttr('disabled');
    $('#point-buy-total').html(pointBuyTotal);
    $(currentInput).val(minusInputValue);

    if (minusInputValue <= 8) {
      $(e.currentTarget).attr('disabled', 'disabled');
    }

    let allInputs = $('#point-buy input');

    for (let i = 0; i < allInputs.length; i++) {
      if ($(allInputs[i]).val() < 15) {
        $($('#point-buy .btn-success')[i]).removeAttr('disabled');
      }
    }
  }
});


$('.plus-button').click( (e) => {
  e.preventDefault();

  const currentInput = $(e.currentTarget).parent().prev()[0];

  let plusInputValue = $(currentInput).val();

  let pointBuyTotal = $('#point-buy-total').html();

  if (plusInputValue < 15 && pointBuyTotal > 0) {
    plusInputValue ++;
    pointBuyTotal --;
    $($(e.currentTarget).prev()[0]).removeAttr('disabled');
    $('#point-buy-total').html(pointBuyTotal);
    $(currentInput).val(plusInputValue);

    if (plusInputValue >= 15) {
      $(e.currentTarget).attr('disabled', 'disabled');
    }

    if (pointBuyTotal <= 0) {
      $('#point-buy .btn-success').attr('disabled', 'disabled');
    }
  }
});
