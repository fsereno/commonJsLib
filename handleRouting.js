
function handleRouting(selector,fScope) {

	var testWWW = 'www.',
		testHTTP = 'http',
		testHash = '#',
		isWWW,
		isHTTP,
		hasHash,
		page = fScope.page;

	$('.active').removeClass('active');
	$('a[href='+page+']').parent('li').addClass('active');

	selector.on('click', function(e){

 		page = $(this).attr('href') || '#';

		$('.active').removeClass('active');

		isWWW = page.indexOf(testWWW) > -1;
		isHTTP = page.indexOf(testHTTP) > -1;
		hasHash = page.indexOf(testHash) > -1;
		
		if ( hasHash === false && page !== undefined && isWWW === false && isHTTP === false) {

			e.preventDefault();
		
			var stateObj = { path: page };
			
			$('a[href='+page+']').parent('li').addClass('active');

			fScope.page = page;
			history.pushState(stateObj, page, page);
			require("./showContent")(fScope);
		}

	});

}

module.exports = handleRouting;
