// PASS CODE = b4K7m8 //
function doModalContent(content) {

	$('#' + content.modalID + ' #messageModalLabel').html(content.labelCont);
	$('#' + content.modalID + ' #modalMessageBody').html(content.bodyCont);

	$('#' + content.modalID).on('hidden.bs.modal', function (e) {
  		
  		$('#' + content.modalID + ' #messageModalLabel').html("");
  		$('#' + content.modalID + ' #modalMessageBody').html("");

	})

}

module.exports = doModalContent;
