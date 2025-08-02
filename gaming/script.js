new Swiper('.swiper', {
      loop: true,

      slidesPerView: 3,
   spaceBetween: 30,
      
      pagination: {
        el: '.swiper-pagination',
        
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });

// new Swiper('.swiper', {
//   loop: true,

//   slidesPerView: 3,
//   spaceBetween: 30,

//   // Responsive breakpoints (optional but useful)
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     600: {
//       slidesPerView: 2,
//     },
//     992: {
//       slidesPerView: 3,
//     }
//   },

//   // Pagination
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },

//   // Navigation
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
  

// });
