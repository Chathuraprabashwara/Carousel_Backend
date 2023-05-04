const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const Slides = require('./models/slides');
require('dotenv').config();
const PORT = process.env.PORT || 4659;

app.use(cors());
app.use(express.json());

mongoose.connect(
	`mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.g5adhud.mongodb.net/?retryWrites=true&w=majority`
);

/*
DB_USER_NAME=chathura
DB_PASSWORD=PTtM9PduvoQfcNqE
*/

const carouselData = {
  slides: [],
};

Slides.find()
  .then((result) => {
    const slidesData = result[0].slides.map((slide) => ({
      image: slide.image,
      title: slide.title,
      subTitle: slide.subTitle,
    }));
    carouselData.slides = slidesData;
  })
  .catch((err) => console.error('Error getting slides data', err));

function getSpecificItems(objArr, end) {
	let specificItems = [];
	// Iterate through the array using for loop
	for (let i = 0; i < end; i++) {
		// Check if the index is within the array's length
		if (i < objArr.length) {
			// Add the item to the specificItems array
			specificItems.push(objArr[i]);
		}
	}
	// Return the specificItems array
	return specificItems;
}

app.get('/api/carousel', (req, res) => {
	const slides = req.query.slides; 
	// TODO: retrieve the carousel data with the specified number of slides
	const specificItems = getSpecificItems(carouselData.slides, slides);
	res.json({ slides: specificItems });
});


app.listen(PORT, () => {
	console.log(`Server is started on ${PORT}`);
});
