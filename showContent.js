function showContent(fScope) {

	var h = $('#'+fScope.config.container).height(),
		$mainContent = $('#'+fScope.config.container),
		$pageWrap = $('#'+fScope.config.frame);
		
	$pageWrap.height(h);
	
	$mainContent.fadeOut(fScope.config.fadeTime,function(){

		var pageName = fScope.page.toLowerCase(),
			pages = fScope.pages;

		$(this).html('');
		$(this).find('a').off();
		
		for (var page = 0; page < pages.length; page++) {

			var thisPage = pages[page];

			if (thisPage.id === pageName){

				$(this).html(thisPage.content);

			}
			
		}

		$pageWrap.height('auto');
			
		$mainContent.fadeIn(fScope.config.fadeTime, function() {
			
			require("./runPageScript.js")(fScope);
			require("./initBLazy.js")(fScope);
			require("./handlePageLinks.js")($mainContent);
			require("./pageScroll.js")(fScope.config);

		});
	});
}

module.exports = showContent;
