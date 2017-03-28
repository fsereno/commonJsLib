function runPageScript(fScope){
	
	var loc = window.location.pathname.split('/');
	var page = loc[loc.length-1];

	if (page.length === 0) {
		fScope.page = "home";
	} else {
		fScope.page = page;
	}

	if (typeof window[fScope.config.method_prefix + fScope.page] !== 'undefined') {
		window[fScope.config.method_prefix + fScope.page](fScope);
	}
	

}

module.exports = runPageScript;
