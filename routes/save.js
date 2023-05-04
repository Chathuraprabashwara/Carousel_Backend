const Slides = require('./models/slides');

const slideData = [
  {
    image: 'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=',
    title: 'Slide 1 Title',
    subTitle: 'Slide 1 Subtitle',
  },
  {
    image: 'https://learnopencv.com/wp-content/uploads/2021/04/image-15.png',
    title: 'Slide 2 Title',
    subTitle: 'Slide 2 Subtitle',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2016/11/04/21/34/beach-1799006__480.jpg',
    title: 'Slide 3 Title',
    subTitle: 'Slide 3 Subtitle',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2015/09/02/12/58/woman-918788__480.jpg',
    title: 'Slide 4 Title',
    subTitle: 'Slide 4 Subtitle',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2021/03/04/15/22/crocus-6069848__480.jpg',
    title: 'Slide 5 Title',
    subTitle: 'Slide 5 Subtitle',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2016/02/19/11/41/laptop-1209008__480.jpg',
    title: 'Slide 6 Title',
    subTitle: 'Slide 6 Subtitle',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2022/01/09/14/53/mountains-6914654__480.jpg',
    title: 'Slide 7 Title',
    subTitle: 'Slide 7 Subtitle',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2017/02/12/17/46/valentines-day-2064450__480.jpg',
    title: 'Slide 8 Title',
    subTitle: 'Slide 8 Subtitle',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2021/11/14/02/51/waterfall-6764527__480.jpg',
    title: 'Slide 9 Title',
    subTitle: 'Slide 9 Subtitle',
  },
  {
    image: 'https://cdn.pixabay.com/photo/2017/10/06/16/50/mexico-2826949__480.jpg',
    title: 'Slide 10 Title',
    subTitle: 'Slide 10 Subtitle',
  },
];

const slides = new Slides({
  slides: slideData,
});

slides.save()
  .then(() => console.log('Slides created successfully'))
  .catch((err) => console.error('Error creating slides', err));
