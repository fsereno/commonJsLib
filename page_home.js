
window.page_home = function (){

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
