const express = require('express');
const ensure  = require('connect-ensure-login');

const Character = require('../models/character-model');
const User = require('../models/user-model');

const characterRoute = express.Router();

// basic character creator get route
characterRoute.get(
  '/characters/new/basic',
  (req, res, next) => {
  res.render('characters/create-character-basic-view');
});

// easy character creator get route
characterRoute.get('/characters/new/easy', (req, res, next) => {
  res.render('characters/new-char-easy-view');
});

// save character post route
characterRoute.post(
  '/characters/new',
  ensure.ensureLoggedIn('/login'),
  (req, res, next) => {

    const newChar = new Character({

      owner: req.user._id,

      // basics
      firstName: req.body.firstNameInput,
      lastName: req.body.lastNameInput,
      race: req.body.raceInput,
      class: req.body.classInput,
      background: req.body.backgroundInput,
      alignment: req.body.alignmentInput,
      level: req.body.levelInput,
      currentXp: req.body.xpInput,
      hitPoints: req.body.hpInput,

      // ability
      strength: req.body.strengthInput,
      dexterity: req.body.dexInput,
      constitution: req.body.constInput,
      intelligence: req.body.intelInput,
      wisdom: req.body.wisdomInput,
      charisma: req.body.charismaInput,
      perception: req.body.perceptionInput,

      inspiration: req.body.inspInput,

      proficiencyBonus: req.body.profInput,

      // saving throws
      savingStrength: req.body.strengthSavingInput,
      savingDexterity: req.body.dexSavingInput,
      savingConst: req.body.constSavingInput,
      savingIntelligence: req.body.intelSavingInput,
      savingWisdom: req.body.wisdomSavingInput,
      savingCharisma: req.body.charismaSavingInput,

      // skills
      acrobatics: req.body.acroInput,
      animalHandling: req.body.animalHandlingInput,
      arcana: req.body.arcanaInput,
      athletics: req.body.athleticsInput,
      deception: req.body.deceptionInput,
      history: req.body.historyInput,
      insight: req.body.insightInput,
      intimidation: req.body.intimidationInput,
      investigation: req.body.invInput,
      medicine: req.body.medicineInput,
      nature: req.body.natureInput,
      skillsPerception: req.body.skillsPerceptionInput,
      performance: req.body.performanceInput,
      persuasion: req.body.skillsPersuasionInput,
      religion: req.body.religionInput,
      slightOfHand: req.body.slightInput,
      stealth: req.body.skillsStealthInput,
      survival: req.body.survivalInput,

      armorClass: req.body.armorClassInput,
      initiative: req.body.initInput,
      speed: req.body.speedInput,

      tempHp: req.body.tempHpInput,
      currentHp: req.body.currentHpInput,
      // maxHp: req.body.Input,
      hitDice: req.body.hitDiceInput,

      // characteristics
      // age: req.body,
      // gender: req.body,
      // height: req.body,
      // weight: req.body,
      // eyes: req.body,
      // skin: req.body,
      // hair: req.body,

      // abilities
      // abilityScore: req.body,
      // abilityMod: req.body,
      // savingSuccess: req.body,
      // savingFailure: req.body,

      attacksAndSpells: req.body.attacksSpellsInput,
      equipment: req.body.equipmentInput,

      personalityTraits: req.body.personalityInput,
      ideals: req.body.idealsInput,
      bonds: req.body.bondsInput,
      flaws: req.body.flawsInput,

      features: req.body.featuresInput,

      otherProfLang: req.body.otherProfInput,
    });

    newChar.save( (err) => {
      if (err) {
        next(err);
        return;
      }

      res.redirect('/characters');
    });
  }
);

// show user's characters get route
characterRoute.get(
  '/characters',
  ensure.ensureLoggedIn('/login'),
  (req, res, next) => {

  Character.find(
    {owner: req.user._id},
    {
      firstName: 1, lastName: 1, race: 1, class: 1, level: 1
    },
    (err, characterList) => {

    if (err) {
      next (err);
      return;
    }

    res.render('characters/all-characters-view',
      {characters: characterList}
    );
  });
});

characterRoute.get(
  '/characters/:id',
  ensure.ensureLoggedIn('/login'),
  (req, res, next) => {
  const currentChar = req.params.id;

  Character.findById(
    currentChar,
    (err, char) => {
      if (err) {
        next(err);
        return;
      }

      res.render('characters/single-character-view',
        {char: char}
      );
    }
  );
});



module.exports = characterRoute;
