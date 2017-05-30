const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dnd-app');

const Player       = require('../models/player-model');

const players = [
  {
    firstName: 'Guss',
    lastName: 'Gutierrez',
    username: 'ImGuss',
    password: 'blahblah',
    characters: [12345, 6789]
  },
  {
    firstName: 'Andy',
    lastName: 'Gonzelz',
    username: 'ImAndy',
    password: 'blahblah',
    characters: [12345, 6789]
  }
];

Player.create(players, (err, playerDocs) => {
  if (err) {
    throw(err);
  }

  playerDocs.forEach( (onePlayer) => {
    console.log(onePlayer);
  });
});
