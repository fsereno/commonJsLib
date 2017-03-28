// PASS CODE = b4K7m8 //
function codeCheck(code) {

	var patt = /^[ab|cd|ef][0-5][GH|IJ|KL][6-9][mn|op|qu][0-9]$/
	var res = patt.test(code);

	return res;

}

module.exports = codeCheck;
