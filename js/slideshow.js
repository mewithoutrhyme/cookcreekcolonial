 // flickity slide show
  // https://flickity.metafizzy.co/#initialize-with-vanilla-javascript
 


  var elem = document.querySelector('.main-carousel');

  var flkty = new Flickity( elem, {
    // options
    contain: true,
    freeScroll: true,
    wrapAround: true,
    autoPlay: true,
    initialIndex: 2,
    adaptiveHeight: true,
    prevNextButtons: false,
  });

  
  