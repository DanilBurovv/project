$('.slick-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    prevArrow: "<div class='myarrow myarrow_prev'>Prev</div>",
    nextArrow: "<div class='myarrow myarrow_next'>Next</div>"
  });

  const settings ={
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    mobileFirst: true,
    prevArrow: "<div class='myarrow myarrow_prev'>Prev</div>",
    nextArrow: "<div class='myarrow myarrow_next'>Next</div>",
    responsive: [
      {
          breakpoint: 640,
          settings: {
              slidesToShow: 2,
          }
      },
      {
          breakpoint: 992,
          settings: {
              slidesToShow: 4,
          }
      },
      ]
  };

  const sl = $('.slider-bottom').slick(settings);

  $(window).on('resize', function () {
      if ($(window).width() > 600 && !sl.hasClass('slick-initialized')) {
          $('.slider-bottom').slick(settings);
      }
  });

