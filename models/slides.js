const mongoose = require('mongoose');

const slideSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true },
  subTitle: { type: String, required: true },
});

const SlidesSchema = new mongoose.Schema({
  slides: [slideSchema],
});

const Slides = mongoose.model('Slides', SlidesSchema);

module.exports = Slides;
