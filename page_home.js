
window.page_home = function (){

	console.log('home page from browserify new')
    var config = require("../json/client.json");

	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 30,
        autoplay: 3000,
        parallax: true
    });

    require("./checkForm.js")(config.forms.mailingList);
    require("./renderRecaptureModule.js")();
    
	
}
