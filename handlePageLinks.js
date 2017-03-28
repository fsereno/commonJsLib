
function handlePageLinks(selector) {
	
	var $anchors = $(selector).find('a');
	require('./handleRouting.js')($anchors,fScope);

}

module.exports = handlePageLinks;
