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
	
	$('.box').removeClass('visible');
	$('.box').removeClass('invisible');
	$('.box').removeClass('third');
	$('.box').removeClass('not-third');

	$('.boxTitle:contains(' + searchTerm + ')').closest('.box').css('display', 'block');
	$('.boxTitle:contains(' + searchTerm + ')').closest('.boxclicker').css('display', 'block');
	$('.boxTitle:contains(' + searchTerm + ')').closest('.box').addClass('visible');
	
	$('.boxTitle').not(':contains(' + searchTerm + ')').closest('.box').css('display', 'none');
	$('.boxTitle').not(':contains(' + searchTerm + ')').closest('.boxclicker').css('display', 'none');
	$('.boxTitle').not(':contains(' + searchTerm + ')').closest('.box').addClass('invisible');
	

	$('.box.visible').each(function(index){
		if(((index+1)%3)==0) {
			$(this).addClass('third');
		}
		else {
			$(this).addClass('not-third');
		}
		
		if(((index)%2)==0){
			$(this).addClass('derecha');
		}
		else{
			$(this).addClass('izquierda');
		}

		}
	});
}