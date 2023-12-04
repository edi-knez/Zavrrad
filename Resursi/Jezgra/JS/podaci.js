(function provjeraPostojiLi(){
	let lagNadimak = ["Nema informacija", "Nema informacija", "Nema informacija", "Nema informacija", "Nema informacija"];
	let lagVrij = ["", "", "", "", ""];
	let lagRez = ["", "", "", "", ""];	 
	let normNadimak = ["Nema informacija", "Nema informacija", "Nema informacija", "Nema informacija", "Nema informacija"];
	let normVrij = ["", "", "", "", ""];
	let normRez = ["", "", "", "", ""];
	let tesNadimak = ["Nema informacija", "Nema informacija", "Nema informacija", "Nema informacija", "Nema informacija"];
	let tesVrij = ["", "", "", "", ""];
	let tesRez = ["", "", "", "", ""];	
	let ludNadimak = ["Nema informacija", "Nema informacija", "Nema informacija", "Nema informacija", "Nema informacija"];
	let ludVrij = ["", "", "", "", ""];
	let ludRez = ["", "", "", "", ""];	

	let pozadina = "1";
	let jacinaZvuka = "33";
	let tezina = "Lagano";


	let SlagNadimak = JSON.stringify(lagNadimak);
	let SlagVrij = JSON.stringify(lagVrij);
	let SlagRez = JSON.stringify(lagRez);
	let SnormNadimak = JSON.stringify(normNadimak);
	let SnormVrij = JSON.stringify(normVrij);
	let SnormRez = JSON.stringify(normRez);
	let StesNadimak = JSON.stringify(tesNadimak);
	let StesVrij = JSON.stringify(tesVrij);
	let StesRez = JSON.stringify(tesRez);
	let SludNadimak = JSON.stringify(ludNadimak);
	let SludVrij = JSON.stringify(ludVrij);
	let SludRez = JSON.stringify(ludRez);

	if(localStorage.length == 0) {
		localStorage.setItem("SlagNadimak", SlagNadimak);
		localStorage.setItem('SlagVrij', SlagVrij);
		localStorage.setItem('SlagRez', SlagRez);
		localStorage.setItem("SnormNadimak", SnormNadimak);
		localStorage.setItem('SnormVrij', SnormVrij);
		localStorage.setItem('SnormRez', SnormRez);
		localStorage.setItem("StesNadimak", StesNadimak);
		localStorage.setItem('StesVrij', StesVrij);
		localStorage.setItem('StesRez', StesRez);
		localStorage.setItem("SludNadimak", SludNadimak);
		localStorage.setItem('SludVrij', SludVrij);
		localStorage.setItem('SludRez', SludRez);
		localStorage.setItem("pozadina", pozadina);
		localStorage.setItem('jacinaZvuka', jacinaZvuka);
		localStorage.setItem('tezina', tezina);
	}

})();
//let test = JSON.parse(localStorage['SlagNadimak'])

let podaci = {

popuniRezultate(){
	(function popuniRezultateLagano(){
	const nadimak = JSON.parse(localStorage['SlagNadimak']);
	const vrijeme = JSON.parse(localStorage['SlagVrij'])
	const rez = JSON.parse(localStorage['SlagRez'])
	for(let i = 1; i <= (Tab1.children[0].children.length) -1; i++){
		Tab1.children[0].children[i].children[1].innerText = nadimak[i-1];
		Tab1.children[0].children[i].children[2].innerText = vrijeme[i-1];
		Tab1.children[0].children[i].children[3].innerText = rez[i-1];
	}
})();

(function popuniRezultateNormalno(){
	const nadimak = JSON.parse(localStorage['SnormNadimak']);
	const vrijeme = JSON.parse(localStorage['SnormVrij'])
	const rez = JSON.parse(localStorage['SnormRez'])
	for(let i = 1; i <= (Tab2.children[0].children.length) -1; i++){
		Tab2.children[0].children[i].children[1].innerText = nadimak[i-1];
		Tab2.children[0].children[i].children[2].innerText = vrijeme[i-1];
		Tab2.children[0].children[i].children[3].innerText = rez[i-1];
	}
})();

(function popuniRezultateTesko(){
	const nadimak = JSON.parse(localStorage['StesNadimak']);
	const vrijeme = JSON.parse(localStorage['StesVrij'])
	const rez = JSON.parse(localStorage['StesRez'])
	for(let i = 1; i <= (Tab3.children[0].children.length) -1; i++){
		Tab3.children[0].children[i].children[1].innerText = nadimak[i-1];
		Tab3.children[0].children[i].children[2].innerText = vrijeme[i-1];
		Tab3.children[0].children[i].children[3].innerText = rez[i-1];
	}
})();

(function popuniRezultateLudost(){
	const nadimak = JSON.parse(localStorage['SludNadimak']);
	const vrijeme = JSON.parse(localStorage['SludVrij'])
	const rez = JSON.parse(localStorage['SludRez'])
	for(let i = 1; i <= (Tab4.children[0].children.length) -1; i++){
		Tab4.children[0].children[i].children[1].innerText = nadimak[i-1];
		Tab4.children[0].children[i].children[2].innerText = vrijeme[i-1];
		Tab4.children[0].children[i].children[3].innerText = rez[i-1];
	}
})();

},

_nadimci : [],
_vremena : [],
_rezultati : [],

dohvatiRezultate(){
	if(TEZINA == "Lagano"){
		this._nadimci = JSON.parse(localStorage[`SlagNadimak`])
		this._vremena = JSON.parse(localStorage[`SlagVrij`])
		this._rezultati = JSON.parse(localStorage[`SlagRez`]) 
	}
	else if(TEZINA == "Normalno"){
		this._nadimci = JSON.parse(localStorage[`SnormNadimak`]) 
		this._vremena = JSON.parse(localStorage[`SnormVrij`])
		this._rezultati = JSON.parse(localStorage[`SnormRez`])
	}
	else if(TEZINA == "Tesko"){
		this._nadimci = JSON.parse(localStorage[`StesNadimak`]) 
		this._vremena = JSON.parse(localStorage[`StesVrij`]) 
		this._rezultati = JSON.parse(localStorage[`StesRez`]) 
	}
	else if(TEZINA == "Ludost"){
		this._nadimci = JSON.parse(localStorage[`SludNadimak`])
		this._vremena = JSON.parse(localStorage[`SludVrij`]) 
		this._rezultati = JSON.parse(localStorage[`SludRez`]) 
	}
},

spremiRezultateU_memoriju(){
	TEZINA == "Lagano" ? localStorage.setItem("SlagNadimak", JSON.stringify(podaci._nadimci)) :                                            TEZINA == "Normalno" ? localStorage.setItem("SnormNadimak", JSON.stringify(podaci._nadimci)) :                                       TEZINA == "Tesko" ? localStorage.setItem("StesNadimak", JSON.stringify(podaci._nadimci)) :                                          localStorage.setItem("SludNadimak", JSON.stringify(podaci._nadimci));
	TEZINA == "Lagano" ? localStorage.setItem("SlagVrij", JSON.stringify(podaci._vremena)) :                                             TEZINA == "Normalno" ? localStorage.setItem("SnormVrij", JSON.stringify(podaci._vremena)) :                                          TEZINA == "Tesko" ? localStorage.setItem("StesVrij", JSON.stringify(podaci._vremena)) :                                             localStorage.setItem("SludVrij", JSON.stringify(podaci._vremena)); 
	TEZINA == "Lagano" ? localStorage.setItem("SlagRez", JSON.stringify(podaci._rezultati)) :                                                 TEZINA == "Normalno" ? localStorage.setItem("SnormRez", JSON.stringify(podaci._rezultati)) :                                          TEZINA == "Tesko" ? localStorage.setItem("StesRez", JSON.stringify(podaci._rezultati)) :                                              localStorage.setItem("SludRez", JSON.stringify(podaci._rezultati));
},

provjeriRezultate_DokIhNema(){
	let k = 0;
	for(let i = 0; i < 5; i++){
		if(this._rezultati[i] !== ""){
			k++;
		}	else {
			break;
		}
		
	}

	return k;
},

sortiraj(){
	let temp;
	for(let i = 0; i < this.provjeriRezultate_DokIhNema(); i++){
		for(let j = i; j < 5; j++){
//			console.log(`this._rezultati[${i}] < this._rezultati[${j}]: ${this._rezultati[i]} < ${this._rezultati[j]}`)
			if(this._rezultati[i] < this._rezultati[j] ){
//				console.log("DA");
				temp = this._rezultati[i];
				this._rezultati[i] = this._rezultati[j];
				this._rezultati[j] = temp;
//				console.log(`this._rezultati[${i}] < this._rezultati[${j}]: ${this._rezultati[i]} < ${this._rezultati[j]}`)
				temp = this._nadimci[i];
				this._nadimci[i] = this._nadimci[j];
				this._nadimci[j] = temp;

				temp = this._vremena[i];
				this._vremena[i] = this._vremena[j];
				this._vremena[j] = temp;

			}
		}
	}
},

nadimak : 0,
memorirajRezultat(){
	podaci.nadimak = izbornikGI.children[0].children[1].value;
	if(podaci.nadimak == ""){
		return;
	} 
	let prviPut = 0;
	let nadimak;	
	do {
		if(podaci._rezultati[prviPut] === ""){
			podaci._rezultati[prviPut] = Zmija.rep - 2;
			podaci._nadimci[prviPut] = podaci.nadimak;
			podaci._vremena[prviPut] = vrijeme;
			break;
		}
		prviPut++;	
	} while (prviPut < 5);

	if(prviPut == 5){
		podaci._rezultati[4] = Zmija.rep - 2;
		podaci._nadimci[4] = podaci.nadimak;
		podaci._vremena[4] = vrijeme;
	}
	podaci.sortiraj();
	podaci.spremiRezultateU_memoriju();
},

provjeriNajviseRezultate(){
	for(let i = 0; i < 5; i++){
		if(this._rezultati[i] == ""){
			return true;
		}
		else if(this._rezultati[i] < Zmija.rep - 2){
			return true;
		}
	}
}

}


//console.log(localStorage)
//	localStorage.clear();