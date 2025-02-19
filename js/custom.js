$(document).ready(function() {
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Backstretch  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
	$.backstretch([
	    "photo/cappadociaWide.JPG",
	    "photo/riaSunSetWide.JPG",
	    "photo/mountainWide.JPG"
	    ],
	    {duration: 3000, fade: 750}
	 );
	    // Duration is the amount of time in between slides,
	    // and fade is value that determines how quickly the next image will fade in



    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Navigation Bar  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
	$('#navbar').scrollspy()
	$('[data-spy="scroll"]').each(function () {
  		var $spy = $(this).scrollspy('refresh')
	});



    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Isotope  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
	$(window).load(function() {
		// init Isotope
		var $grid = $('.grid').isotope({
		  itemSelector: '.element-item',
		  layoutMode: 'fitRows'
		});
		// filter functions
		var filterFns = {
		  // show if number is greater than 50
		  numberGreaterThan50: function() {
		    var number = $(this).find('.number').text();
		    return parseInt( number, 10 ) > 50;
		  },
		  // show if name ends with -ium
		  ium: function() {
		    var name = $(this).find('.name').text();
		    return name.match( /ium$/ );
		  }
		};
		// bind filter button click
		$('.filters-button-group').on( 'click', 'button', function() {
		  var filterValue = $( this ).attr('data-filter');
		  // use filterFn if matches value
		  filterValue = filterFns[ filterValue ] || filterValue;
		  $grid.isotope({ filter: filterValue });
		});
		// change is-checked class on buttons
		$('.button-group').each( function( i, buttonGroup ) {
		  var $buttonGroup = $( buttonGroup );
		  $buttonGroup.on( 'click', 'button', function() {
		    $buttonGroup.find('.is-checked').removeClass('is-checked');
		    $( this ).addClass('is-checked');
		  });
		});
	});



    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Scroll Reveal  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var aboutReveal = {
		origin	 : 'bottom',
		distance : '10px',
		duration : 1000,
		delay	 : 200,
		easing   : 'ease-in-out',
		mobile	 :false
	};

	var contactReveal = {
  		distance : '10px',
  		duration : 1000,
  		delay    : 100,
  		easing   : 'ease-in-out',
  		rotate   : { z: 10 },
  		scale    : 1.1,
	};

	var iconReveal = {
		origin	 : 'bottom',
  		distance : '10px',
  		duration : 1000,
  		delay    : 400,
  		opacity	 : 0,
  		easing   : 'ease-in-out',
	};


	window.sr = ScrollReveal();
	sr.reveal('.section-title', { reset: true});
	sr.reveal('.aboutReveal', aboutReveal);
	sr.reveal('.infoContact', contactReveal);
	sr.reveal('.icon', iconReveal);
	sr.reveal('#iconTwo', { delay: 500 });
	sr.reveal('#iconThree', {delay: 600 });



    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Icon Animate  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $(".socialContact .icon").hover(function(){
        $(this).animate({top: "-8px"});
    },function(){
        $(this).animate({top: "0px"});
    });



    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /*  Image Popup */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
	});



});
