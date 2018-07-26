$(function() {

	// Custom JS
    initSlickCarousel();
    initSlickCarousel2();
    initSlickCarousel3();

});




// slick init
function initSlickCarousel() {
    jQuery('.slick-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        // infinite: true,
        // adaptiveHeight: true,
        // rows: 0,
        // prevArrow: '<span class="slick-prev"></span>',
        // nextArrow: '<span class="slick-next"></span>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true,
                // speed: 2000,
                slidesToShow: 1
            }
        }]
    });
}
function initSlickCarousel2() {
    jQuery('.slick-slider-2').slick({
        slidesToScroll: 1,
        slidesToShow: 5,
        // infinite: true,
        // adaptiveHeight: true,
        rows: 0,
        // prevArrow: '<span class="slick-prev"></span>',
        // nextArrow: '<span class="slick-next"></span>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                centerMode: true,
                autoplay: true,
                // speed: 2000,
                slidesToShow: 3
            }
        },
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    centerMode: true,
                    autoplay: true,
                    // speed: 2000,
                    slidesToShow: 2
                }
            },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToScroll: 1,
                        dots: true,
                        arrows: false,
                        centerMode: true,
                        autoplay: true,
                        // speed: 2000,
                        slidesToShow: 1
                    }
                }]
    });
}
function initSlickCarousel3() {
    jQuery('.slick-slider-3').slick({
        slidesToScroll: 1,
        slidesToShow: 4,
        // infinite: true,
        // adaptiveHeight: true,
        rows: 0,
        // prevArrow: '<span class="slick-prev"></span>',
        // nextArrow: '<span class="slick-next"></span>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true,
                // speed: 2000,
                slidesToShow: 3
            }
        },{
            breakpoint: 998,
            settings: {
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true,
                // speed: 2000,
                slidesToShow: 2
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToScroll: 1,
                dots: true,
                arrows: false,
                autoplay: true,
                // speed: 2000,
                slidesToShow: 1
            }
        }]
    });
}

//========== custom select =================
$(".custom-select").each(function() {
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    $(this).find("option").each(function() {
        template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    });
    template += '</div></div>';

    $(this).wrap('<div class="custom-select-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
}, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
    $('html').one('click',function() {
        $(".custom-select").removeClass("opened");
    });
    $(this).parents(".custom-select").toggleClass("opened");
    event.stopPropagation();
});
$(".custom-option").on("click", function() {
    $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select").removeClass("opened");
    $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});
//==========================================