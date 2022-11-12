$(document).ready(function(){
    $('.carousel__inner').slick(
        {
            speed: 1000,
            prevArrow: '<button type="button" class="slick-prev"><img src="icons/left-solid.svg"></button>',
            nextArrow: '<button type="button" class="slick-next"><img src="icons/right-solid.svg"></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                    
                    }
                },
            ]
        }
    );
  });