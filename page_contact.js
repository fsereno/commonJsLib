window.page_contact = function (){

	var config = require("../json/client.json");
	require("./checkForm.js")(config.forms.contact);
	require("./renderRecaptureModule.js")();
	console.log('contact page');

}
