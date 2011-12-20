$(document).ready(function( $ ) {

    
    var img_ok = [];
    var img_erreur = [];
    var tables = [1,2,3,4,5];


    var rand = -1;
    var bonne_reponse = "";
    var nb_bonnes = 0;
    var nb_erreurs = 0;

    change_question = function() {
	rand = Math.floor(Math.random()*(tables.length));
	table = tables[rand];
	mult = Math.floor(Math.random()*10);
	$('#nombre').text(table+'⨯'+mult);
	$('#saisie').val('');
	bonne_reponse = table*mult;
    };
    
    init = function() {
	$('#form').unbind('submit');
	$('#form').submit(function() {
	    $('#ok').blur();
	    $('#saisie').blur();
	    $('#button-place').unbind('click');
	    var reponse = $('#saisie').val();
	    if (reponse == bonne_reponse) {
		$('#title-place').text('Bonne réponse !');
		nb_bonnes++;
		$('#nb-bonnes').text(nb_bonnes);
		var i = Math.floor(Math.random()*img_ok.length);
		$('#image-place img').attr('src', '');
		$('#image-place img').attr('src', img_ok[i]);
		$('#button-place').text('Une autre !');
		$('#button-place').removeClass();
		$('#button-place').addClass("btn success");
		$('#button-place').click(function() {
		    change_question();
		    $('#saisie').focus();
		    $('#result').modal('hide');
		    return false;
		});
		$('#result').modal('show');
	    } else {
		$('#title-place').text('Mauvaise réponse !');
		nb_erreurs++;
		$('#nb-erreurs').text(nb_erreurs);
		var i = Math.floor(Math.random()*img_erreur.length);
		$('#image-place img').attr('src', '');
		$('#image-place img').attr('src', img_erreur[i]);
		$('#button-place').text('Essaye encore !');
		$('#button-place').removeClass();
		$('#button-place').addClass("btn danger");
		$('#button-place').click(function() {
		    $('#result').modal('hide');
		    return false;
		});
		$('#result').modal('show');
	    }
	    return false;
	});
    };

    $('#result').modal({
	'backdrop': 'static',
	'keyboard': false
    });
    $('#result').modal('hide');

    change_question();
    init();
  
  

});
