$(document).ready(function () {
    /*====================== js for sticky and mobile menu ====================== */
    var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
    $(".main_page").css('min-height', min_height + 'px');
    $(window).resize(function () {
        var min_height = $(window).height() - ($(".custom-header").height() + $(".custom-footer").height());
        $(".main_page").css('min-height', min_height + 'px');
    });

    $(window).scroll(function(){
        var navHeight = $('#custom-header').height();
        var sticky = $('#custom-header');
        if ($(window).scrollTop() > 0) {
            sticky.addClass("sticky")
            $('#dashboard-page').css('padding-top',navHeight+"px");
        } else {
            sticky.removeClass("sticky");
            $('#dashboard-page').css('padding-top',0);
        }
    });
    $('.jb_front_nav_close button').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    /*====================== js for sticky and mobile menu ====================== */

     /*====================== js for scrollTop ====================== */
        var btn = $('#button');

            $(window).scroll(function() {
            if ($(window).scrollTop() > 500) {
               btn.addClass('show');
            } else {
               btn.removeClass('show');
            }
            });

            btn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({scrollTop:0}, '500');
            });
    /*====================== js for scrollTop ====================== */
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
        $(document).on('click','.mob-view', function(){
            $('.desktop-user-list').addClass('show-user');
        });
        $(document).on('click','.close-left-slide', function(){
            $('.desktop-user-list').removeClass('show-user');
        });  

        
        $(function () {
            $('[data-toggle="tooltip"]').tooltip()
        })
        $(document).on('click','.select-btn', function(){
            $('.section-select').addClass('slide-property');
        });
        $(document).on('click','.overlay-close', function(){
            $('.section-select').removeClass('slide-property');
        });
      
        $('#inputDate').datepicker({
        });
        
        $(".profile-link").on('click', function(){
            $(this).siblings().removeClass('active');
            $(this).addClass('active')
          })
    
        $('#table-option').DataTable( {
            "paging":   false,
            "ordering": false,
            "searching": false,
            "info":     false
        } );

        $(".profile-link").on('click', function(event) {
            var _href = $(this).attr('href');
           // Make sure this.hash has a value before overriding default behavior
           if (_href !== "") {
             // Prevent default anchor click behavior
             event.preventDefault();
       
             $('html, body').animate({
               scrollTop: $(_href).offset().top
             }, 800, function(){
             });
           } // End if
         });

         
    /*====================== web slider ====================== */
    $('#home-slider').owlCarousel({
        loop: true,
        center: false,
        autoplay: false,
        dots: false,
        nav: true,
        autoplayTimeout: 4000,
        smartSpeed: 950,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1170: {
                items: 2
            }
        }
    });
    
    $('#result-slider, #result-slider-two, #result-slider-three, #result-slider-four, #result-slider-five, #result-slider-six, #result-slider-seven, #result-slider-eight, #result-slider-nine').owlCarousel( {
        loop: true,
        center: true,
        items: 1,
        autoplay: false,
        dots:false,       
      nav:true,

        autoplayTimeout: 1000,
      navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    });
    /*====================== web slider ====================== */
    
    /*====================== custom video ====================== */
    // video icon poster frame click event
    $(document).on('click','.js-videoPoster',function(ev) {
        ev.preventDefault();
        var $poster = $(this);
        var $wrapper = $poster.closest('.js-videoWrapper');
        videoPlay($wrapper);
        });

        // play the targeted video (and hide the poster frame)
        function videoPlay($wrapper) {
        var $iframe = $wrapper.find('.js-videoIframe');
        var src = $iframe.data('src');
        // hide poster
        $wrapper.addClass('videoWrapperActive');
        // add iframe src in, starting the video
        $iframe.attr('src',src);
        }

        // stop the targeted/all videos (and re-instate the poster frames)
        function videoStop($wrapper) {
        // if we're stopping all videos on page
        if (!$wrapper) {
           var $wrapper = $('.js-videoWrapper');
           var $iframe = $('.js-videoIframe');
        // if we're stopping a particular video
        } else {
           var $iframe = $wrapper.find('.js-videoIframe');
        }
        // reveal poster
        $wrapper.removeClass('videoWrapperActive');
        // remove youtube link, stopping the video from playing in the background
        $iframe.attr('src','');
        }
    /*====================== custom video ====================== */
    
});/*====================== all js end ====================== */

