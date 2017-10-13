
function pageScroll(obj) {

    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

    if (top > 0) {

        $('html, body').stop().animate({
            scrollTop: 0
        }, obj.scrollUpSpeed, 'easeInOutExpo');

    }
  
}

module.exports = pageScroll;
