// $('#point-buy input').change( (e) => {
//
//   console.log(e.currentTarget);
//   if (e.currentTarget.html >= '14') {
//     $(e.currentTarget).attr('disabled', 'disabled');
//   }
//
//   if (e.currentTarget.value <= '8') {
//     $(e.currentTarget).attr('disabled', 'disabled');
//   }
// });




$('.minus-button').click( (e) => {

  const currentInput = $(e.currentTarget).parent().prev()[0];
  console.log(currentInput);

  let minusInputValue = $(currentInput).html();
  console.log(minusInputValue);

  if (minusInputValue > 8) {
    minusInputValue --;
    $($(e.currentTarget).next()).removeAttr('disabled');
    $(currentInput).html(minusInputValue);
    console.log(currentInput);

    if (minusInputValue <= 8) {
      console.log(currentInput);
      $(e.currentTarget).attr('disabled', 'disabled');
    }
  }
});



$('.plus-button').click( (e) => {

  const currentInput = $(e.currentTarget).parent().prev()[0];
  console.log(currentInput);

  let plusInputValue = $(currentInput).html();
  console.log(plusInputValue);

  if (plusInputValue < 15) {
    plusInputValue ++;
    console.log($(e.currentTarget).prev()[0]);
    $($(e.currentTarget).prev()[0]).removeAttr('disabled');
    $(currentInput).html(plusInputValue);

    if (plusInputValue >= 15) {
      console.log(e.currentTarget);
      $(e.currentTarget).attr('disabled', 'disabled');
    }
  }
});
