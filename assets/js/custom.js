/*********************
    sticky header
**********************/
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
});
/*********************
    menu togle js
**********************/
$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
});
/*********************
    clients-slider
**********************/
$('.clients-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    dots: true,
    lazyLoad: true,
    items:1
})
/*********************
    pagination active class add
**********************/
$('.pagination li a').on('click', function(){
    $('.pagination li a.active').removeClass('active');
    $(this).addClass('active');
});

/*********************
    clients-slider
**********************/
$('.latest-news-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots: true,
    lazyLoad: true,
    center: true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        575:{
            items:1
        },
        991:{
            items:3
        }
    }
})

/*********************
    clients-slider
**********************/
$('.customers-slider').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    dots: false,
    lazyLoad: true,
    autoplay: true,
    responsive:{
        0:{
            items:2
        },
        575:{
            items:2
        },
        767:{
            items:3
        },
        991:{
            items:4
        }
    }
})


/*********************
 pagination active class add
 **********************/
