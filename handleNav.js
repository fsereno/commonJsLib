
function handleNav(fScope) {

	$.each(fScope.config.navs,function(i,v){
		
		var $anchors = $('#'+v+' a');
		require('./handleRouting.js')($anchors,fScope);
	
	});	

}

module.exports = handleNav;
