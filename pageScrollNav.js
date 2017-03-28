
function pageScrollNav(obj) {

	$('body').scrollspy({
    	target: '.'+obj.selectors[0].pageScrollNav
	})
}

module.exports = pageScrollNav;
