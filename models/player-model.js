const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema(
  {
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true},
    characters: {type: Array}
  },
  {
    timestamps: true
  }
);

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
