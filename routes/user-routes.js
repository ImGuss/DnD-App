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


// edit profile GET
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


// edit profile POST
userRoute.post(
  '/profile/edit',
  ensure.ensureLoggedIn('/login'),
  (req, res, next) => {

    if (req.user.facebookID) {
      User.findByIdAndUpdate(
        req.user._id,
        {
          firstName:
            req.body.editFirstName === '' ? req.user.firstName : req.body.editFirstName,
          lastName:
            req.body.editLastName === '' ? req.user.lastName : req.body.editLastName
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

    const samePass = bcrypt.compareSync(req.body.validatePassword, req.user.password);

    // if validation fails redirect with error
    if (!samePass) {
      req.flash('error', 'Your password didn\'t match!');

      res.redirect('/profile/edit');
    }

    // if validation succeeds....
    if (samePass) {

      const equalPass = bcrypt.compareSync(req.body.editPassword, req.user.password);

      // if edit password and user password are different AND edit password is not empty...
      if (req.body.editPassword !== '' && !equalPass) {
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(req.body.editPassword, salt);


        User.findByIdAndUpdate(
          req.user._id,
          {
            firstName:
              req.body.editFirstName === '' ? req.user.firstName : req.body.editFirstName,
            lastName:
              req.body.editLastName === '' ? req.user.lastName : req.body.editLastName,
            username:
              req.body.editUsername === '' ? req.user.username : req.body.editUsername,
            password: hashPass
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

      if (req.body.editPassword === '') {

        User.findByIdAndUpdate(
          req.user._id,
          {
            firstName:
              req.body.editFirstName === '' ? req.user.firstName : req.body.editFirstName,
            lastName:
              req.body.editLastName === '' ? req.user.lastName : req.body.editLastName,
            username:
              req.body.editUsername === '' ? req.user.username : req.body.editUsername,
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
    }
  }
);



module.exports = userRoute;
