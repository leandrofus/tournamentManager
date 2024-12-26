const mongoose = require('mongoose');

const TrackingSchema = new mongoose.Schema({
  kills: { type: Boolean, default: false },
  assists: { type: Boolean, default: false },
  deaths: { type: Boolean, default: false },
  points: { type: Boolean, default: false },
  goals: { type: Boolean, default: false },
  tries: { type: Boolean, default: false },
  conversions: { type: Boolean, default: false },
  rebounds: { type: Boolean, default: false },
  games: { type: Boolean, default: false },
  sets: { type: Boolean, default: false },
  goldEarned: { type: Boolean, default: false },
  resources: { type: Boolean, default: false },
  villagersTrained: { type: Boolean, default: false },
  buildingsBuilt: { type: Boolean, default: false },
  buildingsDestroyed: { type: Boolean, default: false }
});

const ScoringSystemSchema = new mongoose.Schema({
  goal: { type: Number },
  assist: { type: Number },
  freeThrow: { type: Number },
  fieldGoal: { type: Number },
  threePointer: { type: Number },
  point: { type: Number },
  game: { type: Number },
  set: { type: Number },
  try: { type: Number },
  conversion: { type: Number },
  penalty: { type: Number },
  kill: { type: Number },
  death: { type: Number },
  gold: { type: Number },
  resources: { type: Number },
  villagerTrained: { type: Number },
  buildingBuilt: { type: Number },
  buildingDestroyed: { type: Number }
});

const AdditionalRulesSchema = new mongoose.Schema({
  offside: { type: Boolean, default: false },
  yellowCard: { type: Boolean, default: false },
  redCard: { type: Boolean, default: false },
  threeSecondViolation: { type: Boolean, default: false },
  doubleDribble: { type: Boolean, default: false },
  serveFault: { type: Boolean, default: false },
  doubleFault: { type: Boolean, default: false },
  towerDive: { type: Boolean, default: false },
  dragonKill: { type: Boolean, default: false },
  noRush: { type: Boolean, default: false },
  rushAllowed: { type: Boolean, default: false },
  mapSize: { type: String }
});

const SportSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  timePerHalf: { type: Number, min: 0 },
  timePerQuarter: { type: Number, min: 0 },
  quarters: { type: Number, min: 0 },
  setLength: { type: Number, min: 0 },
  gamesPerSet: { type: Number, min: 0 },
  matchDuration: { type: Number, min: 0 },
  maxPlayersPerTeam: { type: Number, required: true, min: 1 },
  canSubstitute: { type: Boolean, required: true },
  howManySubstitutions: { type: Number, min: 0 },
  haveHalfTime: { type: Boolean, required: true },
  tracking: { type: TrackingSchema, required: true },
  scoringSystem: { type: ScoringSystemSchema, required: true },
  roles: { type: [String], required: true, validate: [arrayLimit, '{PATH} exceeds the limit of 10'] },
  equipment: { type: [String], required: true, validate: [arrayLimit, '{PATH} exceeds the limit of 10'] },
  additionalRules: { type: AdditionalRulesSchema, required: true },
  events: { type: [String], required: true, validate: [arrayLimit, '{PATH} exceeds the limit of 20'] }
});

// Helper function to limit array size
function arrayLimit(val: any) {
  return val.length <= 10;
}

const Sport = mongoose.model('Sport', SportSchema);

export default Sport;