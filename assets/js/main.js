/* ===================================================================
    
    Author          : Kazi Sahiduzzaman
    Template Name   : Edumi - Education And Lms HTML Template
    Version         : 1.0
    
* ================================================================= */
(function($) {
    "use strict";

    $(document).on('ready', function() {

	//* Isotope js
            $(".protfoli_inner").imagesLoaded( function() {
                $(".protfoli_inner").isotope({
                    layoutMode: 'masonry',  
                }); 
            });  
            
            // Add isotope click function 
            $(".categori-filter li").on('click',function(){
                $(".categori-filter li").removeClass("active");
                $(this).addClass("active"); 
                var selector = $(this).attr("data-filter");
                $(".protfoli_inner").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });  


            $(".protfoli_inner1").imagesLoaded( function() {
                $(".protfoli_inner1").isotope({
                    layoutMode: 'masonry',  
                }); 
            });  
            
            // Add isotope click function 
            $(".categori-filter1 li").on('click',function(){
                $(".categori-filter1 li").removeClass("active");
                $(this).addClass("active"); 
                var selector = $(this).attr("data-filter");
                $(".protfoli_inner1").isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 450,
                        easing: "linear",
                        queue: false,
                    }
                });
                return false;
            });  


			$('.product-layout-slider').owlCarousel({
				items:3,
				loop:true,
				margin:30,
				autoplay:true,
				autoplayTimeout:3000,
				autoplayHoverPause:true,
				responsive:{
					0:{
						items:1,
						nav:true
					},
					600:{
						items:3,
					},
					1000:{
						items:3,
					}
				}
			});
		/* ==================================================
			# Data Background
		 ===============================================*/

		$("[data-background]").each(function(){
			$(this).css("background-image","url(" + $(this).attr("data-background") +")");
		});

		/* ==================================================
			# Smooth Scroll
		 =============================================== */


		$('a.smooth-menu').on('click', function(event) {
			var $anchor = $(this);
			var headerH = '85';
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});

		

		
		$(".typed").typed({
			strings: ["Fashion eCommerce ", "Electronics eCommerce", "Furniture eCommerce", "Grocery eCommerce", "Cosmetics eCommerce", "Hardware eCommerce", "Car Parts eCommerce"],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 100,
			// time before typing starts
			startDelay: 1200,
			// backspacing speed
			backSpeed: 10,
			// time before backspacing
			backDelay: 600,
			// loop
			loop: true,
			// false = infinite
			loopCount: Infinity,
			// show cursor
			showCursor: false,
			// character for cursor
			cursorChar: "|",
			// attribute to type (null == text)
			attr: null,
			// either html or text
			contentType: 'html',
			// call when done callback function
			callback: function() {},
			// starting callback function before each string
			preStringTyped: function() {},
			//callback for every typed string
			onStringTyped: function() {},
			// callback for reset
			resetCallback: function() {}
		});
		

		
        /* ==================================================
            # Hero Slider Carousel
         ===============================================*/
		
        $('.hero-slider').owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            autoplay: true,
			autoplayTimeout:5000,
            items: 1,
            navText: [
                "<i class='ti-angle-left'></i>",
                "<i class='ti-angle-right'></i>"
            ],
        });
		
		
		/* ==================================================
			# Magnific popup init
		 ===============================================*/
		$(".popup-link").magnificPopup({
			type: 'image',
			// other options
		});

		$(".popup-gallery").magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			// other options
		});

		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		$('.magnific-mix-gallery').each(function() {
			var $container = $(this);
			var $imageLinks = $container.find('.item');

			var items = [];
			$imageLinks.each(function() {
				var $item = $(this);
				var type = 'image';
				if ($item.hasClass('magnific-iframe')) {
					type = 'iframe';
				}
				var magItem = {
					src: $item.attr('href'),
					type: type
				};
				magItem.title = $item.data('title');
				items.push(magItem);
			});

			$imageLinks.magnificPopup({
				mainClass: 'mfp-fade',
				items: items,
				gallery: {
					enabled: true,
					tPrev: $(this).data('prev-text'),
					tNext: $(this).data('next-text')
				},
				type: 'image',
				callbacks: {
					beforeOpen: function() {
						var index = $imageLinks.index(this.st.el);
						if (-1 !== index) {
							this.goTo(index);
						}
					}
				}
			});
		});

		/* ==================================================
			Preloader Init
		 ===============================================*/
		// $(window).on('load', function() {
		// 	// Animate loader off screen
		// 	$(".se-pre-con").fadeOut("slow");
		// });


		/* ==================================================
			Contact Form Validations
		================================================== */
		$('.contact-form').each(function() {
			var formInstance = $(this);
			formInstance.submit(function() {

				var action = $(this).attr('action');

				$("#message").slideUp(750, function() {
					$('#message').hide();

					$('#submit')
						.after('<img src="assets/img/logo/ajax-loader.gif" class="loader" />')
						.attr('disabled', 'disabled');

					$.post(action, {
							name: $('#name').val(),
							email: $('#email').val(),
							subject: $('#subject').val(),
							website: $('#website').val(),
							comments: $('#comments').val()
						},
						function(data) {
							document.getElementById('message').innerHTML = data;
							$('#message').slideDown('slow');
							$('.contact-form img.loader').fadeOut('slow', function() {
								$(this).remove();
							});
							$('#submit').removeAttr('disabled');
						}
					);
				});
				return false;
			});
		});


		/* ==================================================
			# Scroll to top
		 =============================================== */
        //Get the button
        var mybutton = document.getElementById("scrtop");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
		

		$('.wodryRX').wodry({
			animation: 'rotateX',
			delay: 2000,
			animationDuration: 1600
		});
		
    }); // end document ready function
})(jQuery); // End jQuery

