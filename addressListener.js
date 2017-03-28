function addressListener(fScope) {

	window.addEventListener("popstate", function(e) {

		var loc = window.location.pathname.split('/'),
		 	getLoc = loc[loc.length-1];

		(getLoc.length === 0 ? fScope.page = 'home' : fScope.page = getLoc);
		require("./showContent")(fScope);

	});

}

module.exports = addressListener;
