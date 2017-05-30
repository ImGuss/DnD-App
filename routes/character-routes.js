const express = require('express');


const Character = require('../models/character-model');

const characterRoute = express.Router();



characterRoute.get('/characters', (req, res, next) => {

});

characterRoute.get('/characters/new/e', (req, res, next) => {
  res.render('characters/create-character-view');
});


characterRoute.get('/characters/new', (req, res, next) => {
  res.render('characters/new-char-view');
});

characterRoute.post('/characters/new', (req, res, next) => {

  const newChar = new Character({
    firstName: req.body.characterFirstNameInput,
    lastName: req.body.characterLastNameInput,
    race: req.body.raceInput,
    class: req.body.classInput
  });

  newChar.save( (err) => {
    if (err) {
      next(err);
      return;
    }

    res.redirect('/');
  });
});



module.exports = characterRoute;
