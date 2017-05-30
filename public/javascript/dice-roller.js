
$('#roll-button').click( (e) => {
  e.preventDefault();

  const diceType = $('#dice-type').val();
  const diceCount = $('#dice-count').val();

  console.log(typeof diceType);

  // if input is correct type of dice, do the logic
  if ((diceType === '4' || diceType === '6' || diceType === '8' || diceType === '10' || diceType === '12' || diceType === '20') && diceCount > 0) {

    const arr = [];

    //              vvv amount of dice to roll
    for (i = 0; i < diceCount; i++) {

      //                                 vvv type of dice to roll
      let x = Math.floor(Math.random() * diceType ) + 1;
      arr.push(x);
    }

    //uncomment below to remove lowest value. note: amount of dice has to be more than 1
    //-------------------------------------------------------
    // if (arr.length > 1) {
      // arr.sort().shift();
    // }
    //-------------------------------------------------------
    //uncomment above to remove lowest value note: amount of dice has to be more than 1


    let count = 0;

    arr.forEach( (y) => {
      count += y;
    });

    // empty the #roll-total div and add the total (count)
    $('#roll-total').empty();
    $('#roll-total').append(count);
  }
  // else empty the #roll-total div and add the below note.
  else {
    $('#roll-total').empty();
    $('#roll-total').append('<p>Please enter valid dice type. Note: Must be a number only. (You can leave out the \'D\')</p>');
  }

});
