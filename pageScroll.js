
function pageScroll(obj) {

	$('a.'+obj.selectors[0].pageScroll).bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
}

module.exports = pageScroll;
