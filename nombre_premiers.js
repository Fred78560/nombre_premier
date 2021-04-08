exports.action = function (data) {
try{

var phrase=JarvisIA.reco
console.log("on envoie : ",phrase)
var foo = phrase
var nbr=foo.match(/\d+/g).join('')
console.log(nbr)

var rep = "";
	
function nombre_premier(rep) {
			if (data.rep !== undefined) {

var valeur = nbr;
var a = 3;
sortir=0;
if (valeur<1) { // au cas où la valeur == 0
	console.log("Le nombre 0 n'est pas un nombre premier, car il est divisible... par tous les entiers positifs.");
	var rep = 'Le nombre 0 n\'est pas un nombre premier, car il est divisible... par tous les entiers positifs.';
	sortir=1;
	}
else if (valeur==2) { // au cas où la valeur == 2
	console.log(valeur + " est un nombre premier.");
	var rep = 'Oui... '+valeur+' est un nombre premier.';
	sortir=1;
	}
else if (valeur==1) { // au cas où la valeur == 1
	console.log(valeur + " n'est pas un nombre premier, car il n'a qu'un seul diviseur entier positif.");
	var rep = 'Non... '+valeur+' n\'est pas un nombre premier, car il n\'a qu\'un seul diviseur entier positif.';
	sortir=1;
	}
else if (valeur % 2==0) { // au cas où la valeur est pair
	console.log(valeur + " n'est pas un nombre premier.");
	var rep = 'Non... '+valeur+' n\'est pas un nombre premier.';
	ortir=1;
	}
while (sortir==0)
	{
		if (a>=(Math.sqrt(valeur)+1)) {
			console.log("Oui... "+valeur + " est un nombre premier.");
			var rep = 'Oui... '+valeur+' est un nombre premier.';
			sortir=1;
			}
		else if (valeur % a==0) {
			console.log("Non... "+valeur +" n'est pas un nombre premier.");
			var rep = 'Non... '+valeur+' n\'est pas un nombre premier.';
			sortir=1;
			} 
	a=a+2;
	}	
			}
	speak(rep);
			}


	function speak(rep) { var valeurduspeak = rep 
			JarvisIASpeech(valeurduspeak)
		return 
	}

	console.log(rep)
	nombre_premier(rep)
}catch(err){console.log(err);return }
}