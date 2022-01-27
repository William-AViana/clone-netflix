$('.owl-carousel').owlCarousel({
  stagePadding: 100,
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    320: {
      items: 1,
      stagePadding: 50,
      margin: 20,
      center: true,
    },
    425: {
      items: 1,
      stagePadding: 95,
      margin: 25,
      center: true,
    },
    600: {
      items: 2
    },
    1000: {
      items: 5,
      margin: 20,
    }
  }
})