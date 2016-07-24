$(document).ready(function() {

	/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Backstretch  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
	$.backstretch([
	    "https://tenglee888.github.io/mywebsite/photo/cappadociaWide.JPG",
	    "https://tenglee888.github.io/mywebsite/photo/riaSunSetWide.JPG",
	    "https://tenglee888.github.io/mywebsite/photo/mountainWide.JPG"
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
/*
	// external js: isotope.pkgd.js

	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.element-item',
	  layoutMode: 'fitRows'
	});
	// filter functions
	var filterFns = {
	  
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
*/


/*
	// filter .malaysia
	$grid.isotope({ filter: '.malaysia' });

	// filter .thailand
	$grid.isotope({ filter: '.thailand' });

	// filter .japan
	$grid.isotope({ filter: '.japan' });

	// filter .turkey
	$grid.isotope({ filter: '.turkey' });

	// filter .greece
	$grid.isotope({ filter: '.greece' });

	// filter .building
	$grid.isotope({ filter: '.building' });

	// filter .people
	$grid.isotope({ filter: '.people' });

	// filter .scenery
	$grid.isotope({ filter: '.scenery' });

	// filter .animal
	$grid.isotope({ filter: '.animal' });

	// filter .food
	$grid.isotope({ filter: '.food' });

	// show all items
	$grid.isotope({ filter: '*' });
*/
	
	
   /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Scroll Reveal  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var aboutReveal = {
		origin	 : 'bottom',
		distance : '10px',
		duration : 1000,
		delay	 : 200,
		easing   : 'ease-in-out'
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
	sr.reveal('.section-title' /*{ reset: true }*/);
	sr.reveal('.aboutReveal', aboutReveal);
	sr.reveal('.infoContact', contactReveal);
	sr.reveal('.icon', iconReveal);
	sr.reveal('#iconTwo', { delay: 500 });
	sr.reveal('#iconThree', {delay: 600 });


});


