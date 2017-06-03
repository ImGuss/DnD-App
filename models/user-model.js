const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {type: String},
    lastName: {type: String},
    username: {type: String},
    password: {type: String},

    // social login types
    facebookID: {type: String}
    // googleID: {type: String}
  },
  {
    timestamps: true
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
