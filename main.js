let locationsButton = document.getElementById('locations-button');

locationsButton.addEventListener('click', () => {
    window.open('https://www.google.com/search?rlz=1C5CHFA_enUS751US751&q=axes+physical+therapy&npsic=0&rflfq=1&rlha=0&rllag=42793530,-106364342,1403806&tbm=lcl&ved=2ahUKEwjYx4Dzq9rdAhUvJDQIHRv7DDgQtgN6BAgCEAQ&tbs=lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2&rldoc=1#rlfi=hd:;si:;mv:!3m12!1m3!1d7956512.9018803!2d-106.36434255!3d40.536999099999996!2m3!1f0!2f0!3f0!3m2!1i815!2i492!4f13.1;tbs:lrf:!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2', '_blank');
})

// jQuery function for smooth scrolling when clicking on top nav links courtesy of https://www.taniarascia.com/smooth-scroll-to-id-with-jquery/

$('a[href*="#"]').on('click', function (event) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 500, 'linear');
});

// this function essentially targets only <a> tag href's that begin with #
// scrollTop, as I undertstand, get's the vertical position of the scroll bar
// We are setting scrollTop to the href attribute that matches the one clicked on in navigation based on the offset for the top of that section (about, locations, etc).