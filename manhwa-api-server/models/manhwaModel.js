const mongoose = require('mongoose');

const manhwaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: String,
  status: {
    type: String,
    enum: ['Ongoing', 'Completed'],
    default: 'Ongoing'
  },
  genre: [String],
  rating: {
    type: Number,
    min: 0,
    max: 10
  },
  imageUrl: String
}, {
  timestamps: true
});

const Manhwa = mongoose.model('Manhwa', manhwaSchema);

module.exports = Manhwa;
