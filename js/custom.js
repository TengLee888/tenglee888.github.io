$(document).ready(function() {


	/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Backstretch  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
	$.backstretch([
	    "https://tenglee888.github.io/mywebsite/photo/cappadociaWide.JPG"
	    , "https://tenglee888.github.io/mywebsite/photo/riaSunSetWide.JPG"
	    , "https://tenglee888.github.io/mywebsite/photo/mountainWide.JPG"
	    ], {duration: 3000, fade: 750});
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
    /* Scroll Reveal  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var iconReveal = {
	    duration: 5000,
	    origin: 'left',
	    distance: '100px',
	    delay: 5000,
	};



    window.sr = ScrollReveal();
	sr.reveal('.icon', iconReveal);


   

});


