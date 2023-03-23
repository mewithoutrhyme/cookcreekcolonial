// cook creek main javascript 

// toggle the nav

document.addEventListener('DOMContentLoaded', function(event) {

    document.querySelector("#nav-toggle").addEventListener('click',function(e){
        e.preventDefault();

        document.querySelector(".nav-main").classList.toggle("nav-hide");

    });

});

// fade and scroll items into view while scrolling

const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };

const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  
  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });

 
// let's make the image gallery have a featured image - users choice

// TO-DO - make it so that each gallery functions seperatly  - can I loop this somehow or do I have to create a different loop for each gallery?

// let gallery = document.querySelectorAll(".img-gallery");

      let thumbs = document.querySelectorAll(".thumbs-image-row > a");

        for (let i=0;i<thumbs.length;i++){

          thumbs[i].addEventListener("click",function(e){
              e.preventDefault();

      this.closest(".img-gallery").querySelector(".large-img-description .featured").setAttribute("src",this.getAttribute("href")); 
              
      this.closest(".img-gallery").querySelector(".large-img-description .featured").setAttribute("alt",this.querySelector("img").getAttribute("alt"));
          });
      }
  
// can we update the year for copyright? yes we can!

      document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()));