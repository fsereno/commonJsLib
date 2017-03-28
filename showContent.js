function showContent(fScope) {

	var h = $('#'+fScope.config.container).height(),
		$mainContent = $('#'+fScope.config.container),
		$pageWrap = $('#'+fScope.config.frame);

	$pageWrap.height(h);
	
	$mainContent.fadeOut(fScope.config.fadeTime,function(){

		$(this).html('');
		$(this).find('a').off();
		
		$(this).html(fScope.pages[fScope.page]);
		$pageWrap.height('auto');
			
		$mainContent.fadeIn(fScope.config.fadeTime, function() {
			
			// Done
			require("./runPageScript.js")(fScope);
			require("./initBLazy.js")(fScope);
			require("./handlePageLinks.js")($mainContent);

		});
	});	
}

module.exports = showContent;
