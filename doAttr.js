
function doAttr(obj) {

	$(obj.elmts).each(function(i){
		$(this).attr(obj.attr, obj.prop);
	})
	
}

module.exports = doAttr;
