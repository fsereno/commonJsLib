
function loadContentAll(fScope) {
	
	$.ajax({
    	url: fScope.config.api,
    	type: 'get',
    	dataType: 'json'
	}).done(function(data){
		fScope.pages = data;
		require("./handleNav.js")(fScope);
		require("./addressListener")(fScope);
	}); 

}

module.exports = loadContentAll;
