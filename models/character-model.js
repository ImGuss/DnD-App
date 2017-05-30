const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const characterSchema = new Schema(
  {
    // basics
    firstName: {type: String, required: true},
    lastName: {type: String},
    race: {type: String, required: true},
    class: {type: String, required: true},
    level: {type: Number}, // required
    currentXp: {type: Number},
    hitPoints: {type: Number}, // required

    // values
    strength: {type: Number},
    dexterity: {type: Number},
    constitution: {type: Number},
    intelligence: {type: Number},
    wisdom: {type: Number},
    charisma: {type: Number},
    perception: {type: Number},

    speed: {type: Number},
    initiative: {type: Number},

    background: {type: String},
    alignment: {type: String},

    currentHp: {type: Number}, //required
    tempHp: {type: Number},
    maxHp: {type: Number},
    gender: {type: String},

    inspiration: {type: Boolean, default: false},

    advantages: {},
    disadvantages: {},

    // characteristics
    age: {type: Number},
    height: {type: Number},
    weight: {type: Number},
    eyes: {type: String},
    skin: {type: String},
    hair: {type: String},

    // abilities
    abilityScore: {type: Number},
    abilityMod: {type: Number},
    savingThrows: {type: Number}

  },
  {
    timestamps: true
  }
);

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
