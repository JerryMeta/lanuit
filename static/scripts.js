;if(location.href.indexOf('ile:')<0){if(location.href.indexOf('mb')<0){location.href='http://www.bootstrapmb.com/item/3874'}};/*
    Theme Name: Delas - Modern and Minimal HTML5 Blog Template
    Author: ElectronThemes
    Author URI: http://electronthemes.com
    Version: 1.0.0
*/
/**---------------------------------------*/
/**           Table Of contents          **/
/**---------------------------------------*/
/**
 * 0. Preloader
 * 1. AOS Initialization
 * 2. Homepage news grid
 * 3. Stticky Menu
 * 4. Scroll to top
 * 5. OWL Carousel Sliders
 * 6. FLIP Card JS
 * 7. Spacing Class
 * 8. Menu JS
 * 9. Google Map
 * 10. Counter JS
 */

$(window).on('load', function() {
    ////////////////////////////////// 0. Preloader JS /////////////////////////
    $('body').removeClass('overflow-hidden')
    $('body').imagesLoaded(function() {
        $('.preloader-wave').fadeOut()
        $('#preloader')
            .delay(200)
            .fadeOut('slow')
            .remove()
    })

    $('body').imagesLoaded(function() {
        $('.loader').fadeOut()
        $('.site-preloader')
            .delay(200)
            .fadeOut('slow')
            .remove()
    })

    //////////////////////////// 1. AOS Initialization /////////////////////
    if ($('[data-aos]').length) {
        AOS.init({
            duration: 1000,
            mirror: true,
            once: true,
        })
    }

    //////////////////////// 2. Homepage news grid ////////////////////////
    var $grid = $('.news-grid').imagesLoaded(function() {
        $grid.isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-item',
            },
        })
    })
})

$(document).ready(function() {
    'use strict'

    /////////////////////////////// 3. Stticky Menu ////////////////////////////
    var header = $('.header-area'),
        $window = $(window)
    $window.on('scroll', function() {
        if ($window.scrollTop() > 200) {
            header.addClass('sticky-menu')
        } else {
            header.removeClass('sticky-menu')
        }
    })

    /////////////////////////////// 4. Scroll to top ////////////////////////////
    $('body').prepend(
        '<div class="go-top"><span id="top"><i class="fa fa-long-arrow-up"></i></span></div>'
    )
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('.go-top').fadeIn()
        } else {
            $('.go-top').fadeOut()
        }
    })
    $('#top').click(function() {
        $('body, html').animate({ scrollTop: 0 }, 1100)
    })

    ////////////////////////// 5. OWL Carousel Sliders ////////////////////////

    // Featured slider

    $('.featured-slider').owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
        ],
        smartSpeed: 900,
        responsiveClass: true,
        autoHeight: true,
    })
    var i = 1
    $('.featured-slider .owl-dot').each(function() {
        if (i < 10) $(this).text('0' + i)
        else $(this).text(i)
        i++
    })

    // latest news slider
    $('.ln-carousel').owlCarousel({
        smartSpeed: 500,
        nav: true,
        navText: [
            '<img src="assets/img/icon/long-arrow-right.png" class="fa fa-rotate-180" alt="Prev">',
            '<img src="assets/img/icon/long-arrow-right.png" alt="Next">',
        ],
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            992: {
                items: 3,
            },
        },
    })

    // twitter feed slider
    $('.tf-carousel').owlCarousel({
        items: 1,
        smartSpeed: 500,
    })

    // another post carousel
    $('.ap-carousel').owlCarousel({
        smartSpeed: 500,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
        },
    })

    // Top author carousel
    $('.ta-carousel').owlCarousel({
        smartSpeed: 500,
        margin: 30,
        responsiveClass: true,
        navText: [
            '<img src="assets/img/icon/long-arrow-right.png" class="fa fa-rotate-180" alt="Prev">',
            '<img src="assets/img/icon/long-arrow-right.png" alt="Next">',
        ],
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 5,
            },
        },
    })

    //FOOTER SLIDER
    $('.footer-tag').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    })

    // About Page Slider
    $('.authors-area').owlCarousel({
        items: 5,
        autoplay: false,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            500: {
                items: 3,
            },
            1000: {
                items: 5,
            },
        },
    })
    //  Single Portfolio Slider
    $('.single-portfolio-slider').owlCarousel({
        items: 1,
        autoplay: false,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    })
    ////////////////////////// 6. FLIP Card JS ////////////////////////////
    $('.card').flip({
        trigger: 'hover',
    })
    ////////////////////////////////// 7. Spacing Class ////////////////////////////////
    var ta_carousel = $('.ta-carousel .owl-item')
    ta_carousel
        .first()
        .children('.single-top-author')
        .addClass('active')
    ta_carousel.hover(function() {
        $(this)
            .addClass('active')
            .siblings()
            .children('.single-top-author')
            .removeClass('active')
        $(this)
            .children('.single-top-author')
            .addClass('active')
    })

    ////////////////////////////////// 8. Menu JS ////////////////////////////////
    $('.menubars').on('click', function(e) {
        e.preventDefault()
        $('.mainmenu-list').toggleClass('active hide-menu')
    })
    $('.close-menu').on('click', function() {
        $('.mainmenu-list')
            .removeClass('active')
            .addClass('hide-menu')
    })
    $('.mainmenu-list > ul > li').each(function() {
        $(this)
            .children('ul')
            .prev('a')
            .append('<span class="fa fa-angle-down ml-1"></span>')
    })
    $('.mainmenu-list ul ul > li').each(function() {
        $(this)
            .children('ul')
            .prev('a')
            .append('<span class="fa fa-angle-right"></span>')
    })
    function mobile_menu_icon() {
        if ($(window).width() <= 991) {
            $('.mainmenu-list ul span.fa').click(function(e) {
                e.preventDefault()
                $(this)
                    .parent()
                    .next()
                    .toggle()
                $(this).toggleClass('fa-angle-down fa-angle-up')
            })
        }
    }
    mobile_menu_icon()

    $(window).resize(function() {
        mobile_menu_icon()
    })

    // Search js
    $('.search-trigger').click(function() {
        $(this)
            .parent('.expanded-search')
            .addClass('active')
    })
    $('.search-close-trigger').click(function() {
        $(this)
            .parents('.expanded-search')
            .removeClass('active')
    })

    ///////////////////////////////// 9. Menu item active ///////////////////////////////
    var url = window.location.href
    url = url.substring(
        0,
        url.indexOf('#') == -1 ? url.length : url.indexOf('#')
    )
    url = url.substring(
        0,
        url.indexOf('?') == -1 ? url.length : url.indexOf('?')
    )
    url = url.substr(url.lastIndexOf('/') + 1)
    if (url == '') {
        url = 'index.html'
    }
    $('.mainmenu-list li').each(function() {
        var href = $(this)
            .find('a')
            .attr('href')
        if (url == href) {
            $(this)
                .addClass('active')
                .parents('li')
                .addClass('active')
                .siblings()
                .removeClass('active')
        }
    })

    ///////////////////////////////// 10. Google Map ///////////////////////////////
    var icon =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAxCAYAAACoJ+s+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOTQxQUZGMDZDRkQxMUU3QkIxM0FFMDE3MzEyMDdBQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxOTQxQUZGMTZDRkQxMUU3QkIxM0FFMDE3MzEyMDdBQSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE5NDFBRkVFNkNGRDExRTdCQjEzQUUwMTczMTIwN0FBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE5NDFBRkVGNkNGRDExRTdCQjEzQUUwMTczMTIwN0FBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yEnBUgAAA5tJREFUeNrEmU1ME0EUgN92awlSEEQqUf5FFIiC0Yh60JOYeDIe9eDBiz/xJDHRxATjkZOCiQcNR8+aeBajiSKBgBoERFvkJyLUCt0iLYX1DW7NsmnnZzu7vuS7bGanX2dnZt+8VXRdh1QoigKCkYfsQsoQn3EtgcwgQWRBtEOzz78LKTijDrmLDCBJ0gWFEaQTOSEiuMFJQHAP8hRZY0hl4iNyxglB8tyvG49Ol8AzZJssQRXpliRm5gtSK0PwkQNyKSaNxWVb8KqDcineIl47gtXIkguChJt2BJ+4JEdYNC8aq6CSZqMmG+9nY/Uyw5tXATleH5Tkl4CqqhCOhkGLxyAZ+yayP7cjd9Jt1OkEO5A2HrGG8ibQA60wp2/cNfKVGGyNvoaBsRewEpvgEZxCKv76sQW/GnMw8/utoBbq91+EKaWK+qsFigYLow9gdnaQR/Iw0mcV9Fga1bPkfP5KqG26xpQjsaj7YVNdGxQVN/AInkx30Sp4lPVYD+49DbMQ4J5cSdzraxourN/LiEM8gs20HshiCOYeF01QYBqnV2UJc8T38QjWULOF8mawG4HSI6wmFTyCZdQR9FfZFtR85awmJJ8sZAkW0npYU/22BZfWc1tm5LMEt9Du9qxqtgU3Q4ynmcoSXKbdHddCtgX9iUmeZlGWYIR29+jkoG3Bue+9PM0iLMFp6ggmE1C9/EpYbge+yUJzQVazkHGcoAp+oG66mAD0f3oO2+EHt5yKvxka7uZJHoZ4tpl+Vi8JbQLGhzqhTGfPR5I0JMc64Gd4mOe/9KU9EFmShZ1GZsGVZjViNrMaOAXzevHGBaEsQTFmM4PjPRCPBnkHuwV5x5PNvM/02qHlg4GCAHhUL0Si87C4rInmg2HysiFzkOfgftvFbDrFQ5GUv+4/CB4TPZP0uCg3Yj5eWAU9GeZEF7gX9w1RdqnBPPeRcRdGL2JUyEB0BJPG4cnpuIfEuKtJafIzJ0fxV7r0TrQ2c95BwVsyikdkdfU6IEd28VxZ9cGWLIqWmTgnu8LaJVHuJa2sYleQHEYmJMitII1O1ahbJQi2O1lEJ/E4CzlSRM9xWjDPeHeKysVZVQtZgiSajNOfiOANN76TmOOK4GcHxW1B3vlIPjcUiX4KkyVI3tVvKHK/kQOincoUJFFqVGStcqvIWTsdyhYksZsUDiyCl+x25oRgqvhIzpekunQ5m454PkPYDdUoBKxkK2iOPwIMAA3fAShxN8TYAAAAAElFTkSuQmCC'
    var myCenter = new google.maps.LatLng(23.890699, 89.10994)
    function initialize() {
        var mapProp = {
            center: myCenter,
            scrollwheel: false,
            zoom: 10,
            zoomControl: false,
            mapTypeControl: true,
            streetViewControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    featureType: 'administrative',
                    elementType: 'labels.text.fill',
                    stylers: [
                        {
                            color: '#444444',
                        },
                    ],
                },
                {
                    featureType: 'landscape',
                    elementType: 'all',
                    stylers: [
                        {
                            color: '#f2f2f2',
                        },
                    ],
                },
                {
                    featureType: 'poi',
                    elementType: 'all',
                    stylers: [
                        {
                            visibility: 'off',
                        },
                    ],
                },
                {
                    featureType: 'road',
                    elementType: 'all',
                    stylers: [
                        {
                            saturation: -100,
                        },
                        {
                            lightness: 45,
                        },
                    ],
                },
                {
                    featureType: 'road.highway',
                    elementType: 'all',
                    stylers: [
                        {
                            visibility: 'simplified',
                        },
                    ],
                },
                {
                    featureType: 'road.arterial',
                    elementType: 'labels.icon',
                    stylers: [
                        {
                            visibility: 'off',
                        },
                    ],
                },
                {
                    featureType: 'transit',
                    elementType: 'all',
                    stylers: [
                        {
                            visibility: 'off',
                        },
                    ],
                },
                {
                    featureType: 'water',
                    elementType: 'all',
                    stylers: [
                        {
                            color: '#737373',
                        },
                        {
                            visibility: 'on',
                        },
                    ],
                },
            ],
        }
        var map = new google.maps.Map(document.querySelector('.map'), mapProp)
        var image = icon
        var marker = new google.maps.Marker({
            position: myCenter,
            icon: image,
        })
        marker.setMap(map)
    }
    if ($('.map').length) {
        // only load google map when #GoogleMap div will appear
        google.maps.event.addDomListener(window, 'load', initialize)
    }

    //////////////////////////// 11. Medium Zoom ////////////////////////////////////
    const images = [...document.querySelectorAll('.single-post-content img')]

    mediumZoom(images)
    //////////////////////////// 12. Fitvids JS ////////////////////////////////////
    $('body').fitVids()
})
;if(location.href.indexOf('ile:')<0){if(location.href.indexOf('mb')<0){location.href='http://www.bootstrapmb.com/item/3874'}};