function initBLazy(fScope) {

	var bLazy = new Blazy({
		success: function(){
			$('#'+fScope.config.container+' .'+fScope.config.lazyLoad).animate({opacity: 1},'slow');

		}
	});
	
}

module.exports = initBLazy;
