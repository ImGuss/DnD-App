const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const characterSchema = new Schema(
  {
    // basics
    firstName: {type: String, required: true},
    lastName: {type: String},
    race: {type: String, required: true},
    class: {type: String, required: true},
    background: {type: String},
    alignment: {type: String},
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

    inspiration: {type: Boolean, default: false},

    proficiencyBonus: {type: Number},

    // saving throws
    savingStrength: {type: Number},
    savingDexterity: {type: Number},
    savingConst: {type: Number},
    savingIntelligence: {type: Number},
    savingWisdom: {type: Number},
    savingCharisma: {type: Number},

    // skills
    acrobatics: {type: Number},
    animalHandling: {type: Number},
    arcana: {type: Number},
    athletics: {type: Number},
    deception: {type: Number},
    history: {type: Number},
    insight: {type: Number},
    intimidation: {type: Number},
    investigation: {type: Number},
    medicine: {type: Number},
    nature: {type: Number},
    skillsPerception: {type: Number},
    performance: {type: Number},
    persuasion: {type: Number},
    religion: {type: Number},
    slightOfHand: {type: Number},
    stealth: {type: Number},
    survival: {type: Number},

    armorClass: {type: Number},
    initiative: {type: Number},
    speed: {type: Number},

    tempHp: {type: Number},
    currentHp: {type: Number}, //required
    maxHp: {type: Number},
    hitDice: {type: Number},

    // characteristics
    age: {type: Number},
    gender: {type: String},
    height: {type: Number},
    weight: {type: Number},
    eyes: {type: String},
    skin: {type: String},
    hair: {type: String},

    // abilities
    abilityScore: {type: Number},
    abilityMod: {type: Number},
    savingSuccess: {type: Number},
    savingFailure: {type: Number},

    attacksAndSpells: {type: String},
    equipment: {type: String},

    personalityTraits: {type: String},
    ideals: {type: String},
    bonds: {type: String},
    flaws: {type: String},

    features: {type: String},

    otherProfLang: {type: String}

  },
  {
    timestamps: true
  }
);

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;
