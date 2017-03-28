
function submitForm(obj) {

	$('#'+obj.formId).validator().on('submit', function (e) {
	  if (e.isDefaultPrevented()) {
	    // handle the invalid form...
	  } else {

        if (obj.formMethod === 'Ang') {
            angular.element('#'+obj.formId).scope().sendNow(obj.formType);
        }else{

            //console.log('Form submitted');
        }

	  }
	
    });

}

module.exports = submitForm;
