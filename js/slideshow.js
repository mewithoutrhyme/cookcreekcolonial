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
  });

  // $('main-carousel').flickity({
  //   arrowShape: { 
  //     x0: 5,
  //     x1: 60, y1: 25,
  //     x2: 60, y2: 10,
  //     x3: 35
  //   }
  // });
 
  // paralax version of flickity, 
  // but can't quite figure out why the wrap is not working the same, 
  // so it will have to wait

// var carousel = document.querySelector('.main-carousel');
// var flkty = new Flickity( carousel, {
//   imagesLoaded: true,
//   // percentPosition: false,

//   initialIndex: 2,
//   contain: true,
//   freeScroll: true,
//   wrapAround: true,
//   autoPlay: true,
  
// });

// var imgs = carousel.querySelectorAll('.carousel-cell img');
// // get transform property
// var docStyle = document.documentElement.style;
// var transformProp = typeof docStyle.transform == 'string' ?
//   'transform' : 'WebkitTransform';

// flkty.on( 'scroll', function() {
//   flkty.slides.forEach( function( slide, i ) {
//     var img = imgs[i];
//     var x = ( slide.target + flkty.x ) * -1/3;
//     img.style[ transformProp ] = 'translateX(' + x  + 'px)';
//   });
// });
  