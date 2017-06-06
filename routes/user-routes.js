const express   = require('express');
const bcrypt    = require('bcrypt');
const passport  = require('passport');
const ensure    = require('connect-ensure-login');

const User      = require('../models/user-model');
const Character = require('../models/character-model');

const userRoute = express.Router();


userRoute.get(
  '/profile',
  ensure.ensureLoggedIn('/login'),
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

userRoute.get(
  '/profile/edit',
  ensure.ensureLoggedIn('/login'),
  (req, res, next) => {

    const messages = {
      successMessage: req.flash('success'),
      errorMessage: req.flash('error')
    };

    res.render('users/edit-profile-view', {messages: messages});
});

userRoute.post(
  '/profile/edit',
  ensure.ensureLoggedIn('/login'),
  (req, res, next) => {

    User.findByIdAndUpdate(
      req.user._id,
      {
        firstName: req.body.editFirstName,
        lastName: req.body.editLastName,
        username: req.body.editUsername,
      },
      (err, user) => {
        if (err) {
          next(err);
          return;
        }

        req.flash('success', 'Your details have been saved');
        res.redirect('/profile/edit');
      }
    );
  }
);



module.exports = userRoute;
