document.addEventListener('DOMContentLoaded', function() {
  var featuredImage = document.querySelector('figure img');
  var thumbnails = document.querySelectorAll('ul li img');

  var imageDetails = [
    
    {
      src: 'images/flowers-pink-large.jpg',
      alt: 'Poppies',
      title: 'Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany',
      description: 'Photographed by Dietmar Rabich'
    },
    {
      src: 'images/daffodils-large.jpg',
      alt: 'Daffodils',
      title: 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany',
      description: 'Photographed by Dietmar Rabich'
    },
    {
      src: 'images/sentmaring-park-large.jpg',
      alt: 'Sentmaring Park',
      title: 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany',
      description: 'Photographed by Dietmar Rabich'
    },
    {
      src: 'images/market-large.jpg',
      alt: 'Market',
      title: 'Market in Münster, North Rhine-Westphalia, Germany',
      description: 'Photographed by Dietmar Rabich'
    },
    {
      src: 'images/sunflowers-large.jpg',
      alt: 'Sunflowers',
      title: 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany',
      description: 'Photographed by Dietmar Rabich'
    }
  ];

  thumbnails.forEach(function(thumbnail, index) {
    thumbnail.addEventListener('click', function() {
      var thumbnailSrc = this.src;
      var thumbnailAlt = this.alt;
      var fullSizeImageSrc = thumbnailSrc.replace('-small', '-large');
      var imageDetail = imageDetails[index];

      featuredImage.src = fullSizeImageSrc;
      featuredImage.alt = thumbnailAlt;

      var caption = document.querySelector('figure figcaption');
      caption.textContent = imageDetail.title;
    });
  });
});

  