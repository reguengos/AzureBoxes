jQuery.expr[':'].contains = function(a, i, m) {
 return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};

$('#inputbox').on('focus', eraseText);
$('#inputbox').on('blur', blurText);
$('#inputbox').on('keyup', filter);

function eraseText() {
	search = $('#inputbox');
	if(search.val() == 'Encuentra el escenario que estas buscando..') {
		search.val('');
	}
}

function blurText() {
	search = $('#inputbox');
	if(search.val() == '') {
		search.val('Encuentra el escenario que estas buscando..');
	}
}

function filter() {
	searchTerm = $('#inputbox').val();

	$('.boxTitle:contains(' + searchTerm + ')').closest('.box').css('display', 'block');
	$('.boxTitle').not(':contains(' + searchTerm + ')').closest('.box').css('display', 'none');
}