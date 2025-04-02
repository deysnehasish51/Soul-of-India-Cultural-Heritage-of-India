const mongoose = require('mongoose');

const stateInfoSchema = new mongoose.Schema({
  stateName: String,
  cuisine: String,
  art: String,
  music: String,
  dance: String,
  imageURL: Array,
  videoURL:String,
  lang: String
}, { collection: 'States' });

module.exports = mongoose.model('StateInfo', stateInfoSchema);

