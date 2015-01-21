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
	});
}

function orderBySuggested() {
	$('#filtroscont .filtro').removeClass('active');
	$('#suggested').addClass('active');
	
	$('.boxclicker').sortElements(function(a, b){
		return Number($(a).attr("suggested")) > Number($(b).attr("suggested")) ? 1 : -1;
	});
}

function orderByDate() {
	$('#filtroscont .filtro').removeClass('active');
	$('#date').addClass('active');
	
	$('.boxclicker').sortElements(function(a, b){
		return Number($(a).attr("date")) < Number($(b).attr("date")) ? 1 : -1;
	});
}

function orderByTime() {
	$('#filtroscont .filtro').removeClass('active');
	$('#time').addClass('active');
	
	$('.boxclicker').sortElements(function(a, b){
		return Number($(a).attr("time")) > Number($(b).attr("time")) ? 1 : -1;
	});
}

function orderByName() {
	$('#filtroscont .filtro').removeClass('active');
	$('#title').addClass('active');
	
	$('.boxclicker').sortElements(function(a, b){
		return $(a).find(".boxTitle").text().trim() > $(b).find(".boxTitle").text().trim() ? 1 : -1;
	});
}

//CHOREADO DE:http://james.padolsey.com/javascript/sorting-elements-with-jquery/
jQuery.fn.sortElements = (function(){
 
    var sort = [].sort;
 
    return function(comparator, getSortable) {
 
        getSortable = getSortable || function(){return this;};
 
        var placements = this.map(function(){
 
            var sortElement = getSortable.call(this),
                parentNode = sortElement.parentNode,
 
                // Since the element itself will change position, we have
                // to have some way of storing its original position in
                // the DOM. The easiest way is to have a 'flag' node:
                nextSibling = parentNode.insertBefore(
                    document.createTextNode(''),
                    sortElement.nextSibling
                );
 
            return function() {
 
                if (parentNode === this) {
                    throw new Error(
                        "You can't sort elements if any one is a descendant of another."
                    );
                }
 
                // Insert before flag:
                parentNode.insertBefore(this, nextSibling);
                // Remove flag:
                parentNode.removeChild(nextSibling);
 
            };
 
        });
 
        return sort.call(this, comparator).each(function(i){
            placements[i].call(getSortable.call(this));
        });
 
    };
 
})();

function send(){

	search_nombre = $('#input_nombre');
	search_body = $('#input_mensj');
	window.location.href = "mailto:azureboxes@microsoft.com?subject=Contacto AzureBoxes&body=" + "Nombre: " + search_nombre.val() + "%0D%0A" + "%0D%0A" + search_body.val();

	
}


