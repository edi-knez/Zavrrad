var cenX, cenY;
var slikaJabuke = new Image();
slikaJabuke.src = "Resursi/Slike/jabuka1.png"

let Hrana = {
hranaPojedena: 2,
hranaPosX: 0,
hranaPosY: 0,
hranaRAWposX: 0,
hranaRAWposY: 0,
rad: 15,

stvoriHranu(){ 
	this.hranaRAWposX = Math.floor(Math.random() * noviGrid() ) * Zmija.dimenzija
	this.hranaRAWposY = Math.floor(Math.random() * noviGrid() ) * Zmija.dimenzija
	let status = false;
	for(let i = 0; i < Zmija.ZMIJA.length; i++){
		if(this.hranaRAWposX == Zmija.x[i] && this.hranaRAWposY == Zmija.y[i]){
			status = true;
//			console.log("UPS");
		}
	}
	if(!status){
		this.hranaPosX = this.hranaRAWposX + (Zmija.dimenzija - this.rad) / 2
		this.hranaPosY = this.hranaRAWposY + (Zmija.dimenzija - this.rad) / 2

		cenX = this.hranaRAWposX + Zmija.dimenzija / 2;
		cenY = this.hranaRAWposY + Zmija.dimenzija / 2 ;

		if(this.hranaPojedena % 15 == 0 && Zmija.lv < 3)	this.rad += 5;
	}	else {
		this.stvoriHranu()
	}
},


crtajHranu(){
	ctx.drawImage(slikaJabuke, this.hranaPosX, this.hranaPosY, this.rad, this.rad); 
},



};