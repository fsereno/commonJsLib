
function pageScrollNavClose(selector) {

	$('.navbar-collapse ul li a').not('.dropdown-toggle').click(function() {
    	$('.navbar-toggle:visible').click();
	});
}

module.exports = pageScrollNavClose;
