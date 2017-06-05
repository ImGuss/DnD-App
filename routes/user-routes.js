const express = require('express');
const ensure = require('connect-ensure-login');

const User = require('../models/user-model');
const Character = require('../models/character-model');

const userRoute = express.Router();


userRoute.get(
  '/profile',
  ensure.ensureLoggedIn('login'),
  (req, res, next) => {

    Character.find(
      {owner: req.user._id},
      {firstName: 1},
      (err, characterList) => {
        if (err) {
          next(err);
          return;
        }

        res.render('users/profile-view', {characters: characterList});
      }
    );
  }
);



module.exports = userRoute;
