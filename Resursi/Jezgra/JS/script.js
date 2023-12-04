
// --> izbornik centrirat ga i stavit veličinu 700x700 da zamjeni canvas;
// 		togglat izbornik pomocu kartice
var Vvrijeme = 0;
var refreshRate, mozakIgrice;
let trenutacnaPjesma = pjesmaLagano;
izbornikGI = gotova_igra.children[3];
function petljaIgrice(){

	if(document.fullscreen) {
//		console.log("PETLJA IGRICE");
		const frame = (10000 / 60) / 10;
		let vrijeme = TEZINA == "Lagano" ? 575 : TEZINA == "Normalno" ? 500 : TEZINA == "Tesko" ? 470 : 420;
		let oduzmiVrijeme = TEZINA == "Lagano" ? 37.5 : TEZINA == "Normalno" ? 37.5 : 45;
		trenutacnaPjesma = TEZINA == "Lagano" ? pjesmaLagano :                                                        						        TEZINA == "Normalno" ? pjesmaNormalno :                                                           						TEZINA == "Tesko" ? pjesmaTesko : pjesmaLudost;
		Zmija.nacrtajPocetnuPoziciju();
		setTimeout(() => {
			trenutacnaPjesma.volume = parseInt(localStorage["jacinaZvuka"]) / 100;
			zvukJabuka.volume = parseInt(localStorage["jacinaZvuka"]) / 100;
			Hrana.stvoriHranu();
			trenutacnaPjesma.play();

		refreshRate = setInterval(() => {
				upravljanje();
//				console.log(frame)
			}, frame); 

		mozakIgrice = setInterval(() => {
			Vvrijeme += vrijeme;
//			console.log(Vvrijeme)
//			console.log(vrijeme)
			update();
			if(trenutacnaPjesma.ended)	trenutacnaPjesma.play();
		}, vrijeme)
	})


	}

	document.addEventListener("fullscreenchange", () => {
			gotova_igra.style.display = "none";
			tvornickePostavke();
			clearInterval(refreshRate);
			clearInterval(mozakIgrice);
			dodajSlusaceGlavnogIzbornika();
			trenutacnaPjesma.pause();
			trenutacnaPjesma.currentTime = 0;
	})


	setInterval(() => {
		if(!document.fullscreen){
			gotova_igra.style.display = "none";
			tvornickePostavke();
			if(izbornikGI.children[0] == _unos){
				izbornikGI.removeChild(_unos);
				izbornikGI.removeChild(_spremi);
			}
			clearInterval(refreshRate);
			clearInterval(mozakIgrice);
			dodajSlusaceGlavnogIzbornika();
			trenutacnaPjesma.pause();
			trenutacnaPjesma.currentTime = 0;
		}
	}, 10)
}



var smjer = 1;	// 1-desno 2-lijevo 3-gore 4-dolje
var keyCode;


function upravljanje(){ 
	if( keyCode == 39){
		smjer = 1;
//		console.log("DESNO")
	}
	else if( keyCode == 37){
		smjer = 2;
//		console.log("LIJEVO")
	}
	else if( keyCode == 38){
		smjer = 3;
//		console.log("GORE")
	}
	else if( keyCode == 40){
		smjer = 4;
//		console.log("DOLJE")
	}	
}


	//izracunajZaMene();

function update(){
	if(gm1() == false && gm2() == false) {	
		vrtiIgru();
	} else {
		gameOverScreen();
	}

}


let kulizijaSaHranom = function() {
	return Dist( glavaX, glavaY, cenX, cenY ) == 0 ;	
}

function Dist(x1, y1, x2, y2){
	return (Math.abs(x2 - x1) + Math.abs(y2 - y1));
}


function noviGrid(){
	return Math.floor( 700 / Zmija.dimenzija );

}


function vrtiIgru(){
	Zmija.updateZmija();
	Zmija.centarGlave();

	if( kulizijaSaHranom()) {
		zvukJabuka.play();
		Zmija.rast();
		Hrana.stvoriHranu();
	}  
	Hrana.crtajHranu();
}



/*function izracunajZaMene(){

	for(let i = 0; i < 700; i++){
		if( 700 % i == 0)
			console.log(i);

	}
}
*/
let gm1 = function gameOver1( x = Zmija.x, y = Zmija.y ) { // ako se ugrize za rep
	let vrati = false;
	for(let i = 1; i <= Zmija.rep; i++){
		if( x[0] == x[i] && y[0] == y[i] ){
			vrati =  true;
			GOTOVAIGRA = true;
			break;
		}
	}
	return vrati;
}

let gm2 = function gameOver2(x = Zmija.x[0], y = Zmija.y[0]){ // ako je glava zmije izvan canvasa
	let vrati = false;
	if(x < 0)		vrati = true;
	if(y < 0)		vrati = true;
	if(x > 680)		vrati = true; 
	if(y > 680) 	vrati = true;

	return vrati;
}

function krajIgre(){
	trenutacnaPjesma.pause();
	trenutacnaPjesma.currentTime = 0;
	clearInterval(mozakIgrice)
	clearInterval(refreshRate)
}

var izbornikGI;
let _unos;
let _spremi;
function gameOverScreen(){
	console.log("KRAJ IGRE");
	gotova_igra.style.display = "block";
	document.querySelector(".lag").innerText = TEZINA;
	izadi_iz_igre.addEventListener("click", vratiNaGlavniIzbornik3)
	krajIgre();
	dobiVrijeme()
	potrebnoVrijeme.innerText = dobiVrijeme();
	rez.innerText = Zmija.rep - 2
	podaci.dohvatiRezultate();
	if( podaci.provjeriNajviseRezultate() && Zmija.rep > 2 ){
		const v = document.querySelector("#v");
		_unos = napraviELEMENT_unos();
		_spremi = napraviELEMENT_memoriraj()
		izbornikGI.insertBefore(_unos, v);
		izbornikGI.appendChild(_spremi);
		_spremi.addEventListener("click", pozivatelj_spremanjaRezultata)
	}

} 

function pozivatelj_spremanjaRezultata(e){
	e.preventDefault();
	podaci.memorirajRezultat();
	toggleFullscreen();
	gotova_igra.style.display = "none";
	tvornickePostavke();
	izbornikGI.removeChild(_unos);
	izbornikGI.removeChild(_spremi);
}

function vratiNaGlavniIzbornik3(){
	toggleFullscreen();
	gotova_igra.style.display = "none";
	tvornickePostavke();
	if(izbornikGI.children[0] == _unos){
		izbornikGI.removeChild(_unos);
		izbornikGI.removeChild(_spremi);
	}
}

var vrijeme;
function dobiVrijeme(){
	let sekunde = Vvrijeme / 1000;
	let sati = Math.floor(sekunde / 3600).toFixed(0);
	sekunde %= 3600;
	let minute = Math.floor(sekunde / 60).toFixed(0);
	sekunde = Math.floor(sekunde % 60).toFixed(0);
	vrijeme = `${sati}h : ${minute}m : ${sekunde}s`;
	return vrijeme;
}

function tvornickePostavke(){
	//////////////////// script.js
	Vvrijeme = 0;
	smjer = 1;
	keyCode = undefined;

	//////////////////// zmija.js
	X = 0;
	Zmija.ZMIJA = ["g", "r", "r"];
	Zmija.x = [40, 20, 0];
	Zmija.y = [0, 0, 0];
	Zmija.rep = 2;
	Zmija.smjer = 1;
	Zmija.lv = 0;
	Zmija.lvVel = [20, 25, 28, 35];
	Zmija.dimenzija = 20;

	/////////////////////// hrana.js
	Hrana.hranaPojedena = 2;
	Hrana.rad = 15;

	setTimeout(() => ctx.clearRect(0, 0, canvas.width, canvas.height), 100);
}

function napraviELEMENT_unos(){
	let osnova;
	let divCENTRIRAJ = document.createElement("div");
	let labelNADIMAK = document.createElement("label");
	let inputNADIMAK = document.createElement("input");

	divCENTRIRAJ.classList.add("centriraj");
	labelNADIMAK.setAttribute("id", "nad");
	labelNADIMAK.innerText = "Nadimak:";
	inputNADIMAK.type = "text";
	inputNADIMAK.setAttribute("id", "nadimak");
	inputNADIMAK.placeholder = "Unesi željeni nadimak";
	inputNADIMAK.maxlength = 15;

	divCENTRIRAJ.appendChild(labelNADIMAK);
	divCENTRIRAJ.appendChild(inputNADIMAK);
	osnova = divCENTRIRAJ
//	console.log(osnova)
	return osnova;
}

function napraviELEMENT_memoriraj(){
	let osnova;
	let divCENTRIRAJ = document.createElement("div");
	let inputMEMORIRAJ = document.createElement("input");

	divCENTRIRAJ.classList.add("centriraj");
	inputMEMORIRAJ.type = "submit";
	inputMEMORIRAJ.setAttribute("id", "submit");
	inputMEMORIRAJ.value = "Memoriraj";

	divCENTRIRAJ.appendChild(inputMEMORIRAJ);
	osnova = divCENTRIRAJ
	return osnova;
}