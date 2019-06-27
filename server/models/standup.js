const mongoose = require('mongoose');

const standupSchema = new mongoose.Schema({
  teamMember: { type: String },
  project: { type: String },
  workYesterday: { type: String },
  workToday: { type: String },
  impediment: { type: String },
  createdOn: { type: Date, default: Date.now },
})

// Disabled _id schema example
// const noIdSchema = new mongoose.Schema(
//   {name: String},
//   {_id: false}
// )

module.exports = mongoose.model('Standup', standupSchema);