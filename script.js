jQuery.expr[':'].contains = function(a, i, m) {
 return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
};

$('#inputbox').on('focus', eraseText);
$('#inputbox').on('blur', blurText);
$('#inputbox').on('keyup', filter);
$('#boton').on('click',send);

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

function order(){

	
}



    console.log(document);
    var form = document.getElementById("input_mensj");

    form.onsubmit = function (e) {
      // stop the regular form submission
      e.preventDefault();

      // collect the form data while iterating over the inputs
      var data = {};
      for (var i = 0, ii = form.length; i < ii; ++i) {
        var input = form[i];
        if (input.name) {
          data[input.name] = input.value;
        }
      }

    function send(){
     $.ajax({
             type: "POST",
             url: "https://sendgrid.com/api/mail.send.json",
             data: JSON.stringify(data),
             api_user: "azure_5f3831ea10a61e05956d9d7874210834@azure.com",
             api_key: "56V1nAelM4oPjbT",
             to: "b.straub@outlook.com",
             toname: "AzureBoxes",
             subject: "Contacto AzureBoxes",
             text: "prueba",
             from: "b.straub@outlook.com",
             contentType: "application/json; charset=utf-8",
             crossDomain: true,
             dataType: "json",
             success: function (data, status, jqXHR) {

                 alert(success);
             },

             error: function (jqXHR, status) {
                 // error handler
                 console.log(jqXHR);
                 alert('fail' + status.code);
             }
          });
    }


