var glavaX, glavaY, X = 0, Xvel = 6;
const canvas = document.querySelector("canvas");
canvas.width = 700;
canvas.height = 700;
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "black";
ctx.lineWidth = 1;

let Zmija = {


ZMIJA: ["g", "r", "r"],
x: [40, 20, 0],
y: [0, 0, 0],
rep: 2,
smjer: 1,	// 1-desno 2-lijevo 3-gore 4-dolje

// lv0 - 20
// lv1 - 25
// lv2 - 28
// lv3 - 35
lv: 0,
lvVel: [20, 25, 28, 35],
dimenzija: 20,


crtajZmiju(){
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.fillStyle = "rgb(255, 255, 0)";
	for( let i = this.ZMIJA.length - 1; i >= 1; i-- ){
		this.x[i] = this.x[i-1];
		this.y[i] = this.y[i-1];
		ctx.fillRect( this.x[i], this.y[i], this.dimenzija, this.dimenzija );
		ctx.strokeRect( this.x[i], this.y[i], this.dimenzija, this.dimenzija )
	}
	this.move();
	for(let i = 0; i < 10; i++){
		X += Xvel;
		if(X > 127 || X < 0) Xvel *= -1;		
	}

	ctx.fillStyle = `rgb(255, ${X}, ${X})`;
	ctx.fillRect( this.x[0], this.y[0], this.dimenzija, this.dimenzija );

},

nacrtajPocetnuPoziciju(){
	ctx.fillStyle = "rgb(255, 0, 0)";
	ctx.fillRect( this.x[0], this.y[0], this.dimenzija, this.dimenzija );
	ctx.strokeRect( this.x[0], this.y[0], this.dimenzija, this.dimenzija )
	ctx.fillStyle = "rgb(255, 255, 0)";
	ctx.fillRect( this.x[1], this.y[1], this.dimenzija, this.dimenzija );
	ctx.strokeRect( this.x[1], this.y[1], this.dimenzija, this.dimenzija )
	ctx.fillRect( this.x[2], this.y[2], this.dimenzija, this.dimenzija );
	ctx.strokeRect( this.x[2], this.y[2], this.dimenzija, this.dimenzija )

},

adjustPosX( x = this.x[0] ){
	let vrati;
	let najblizaUdaljenostX = 700;
	for(let i = 0; i < 700; i += this.dimenzija){
		if( Math.abs( x - i ) < najblizaUdaljenostX ){
			najblizaUdaljenostX = Math.abs(x-i);
			if( x > i) {
				vrati = x - najblizaUdaljenostX;
//				console.log(`zmijaX: ${x} - Math.abs(x-i): ${Math.abs(x-i)}`);
//				console.log(vrati);
			} else {
				vrati = x + najblizaUdaljenostX;
//				console.log(`zmijaX: ${x} + Math.abs(x-i): ${Math.abs(x-i)}`);
//				console.log(vrati);
			}
		}
	}
return vrati;
},

adjustPosY( y = this.y[0] ){
	let vrati;
	let najblizaUdaljenostY = 700;
	for(let i = 0; i < 700; i += this.dimenzija){
		if( Math.abs( y - i ) < najblizaUdaljenostY ){
			najblizaUdaljenostY = Math.abs(y-i);
			if( y > i) {
				vrati = y - najblizaUdaljenostY;
			//	console.log(`zmijaY: ${y} - Math.abs(y-i): ${Math.abs(y-i)}`);
			//	console.log(vrati);
			} else {
				vrati = y + najblizaUdaljenostY;
			//	console.log(`zmijaY: ${y} + Math.abs(y-i): ${Math.abs(y-i)}`);
			//	console.log(vrati);
			}
		}
	
	}	
return vrati;
},

rast(){
	this.ZMIJA.push("r");
	this.rep++;
	let i = this.rep;
	this.x.push(this.x[i-1]);
	this.y.push(this.y[i-1]);
	if( this.lv < 3 &&  i % 15 == 0){
		this.lv++;
//		console.log(this.lv)
		this.dimenzija = this.lvVel[this.lv];
//		console.log(`this.dimenzija: ${this.dimenzija}`)
		this.x[0] = this.adjustPosX();
		this.y[0] = this.adjustPosY()
		
	}
	
	Hrana.hranaPojedena += 1;
},

move(){	
	if(smjer == 1 && this.smjer != 2)		this.smjer = smjer;
	else if(smjer == 2 && this.smjer != 1)	this.smjer = smjer;
	else if(smjer == 3 && this.smjer != 4)	this.smjer = smjer;
	else if(smjer == 4 && this.smjer != 3)	this.smjer = smjer;

	switch(this.smjer) {
		case 1: 
			Zmija.x[0] += Zmija.dimenzija; 
		break;
		case 2:
			Zmija.x[0] -= Zmija.dimenzija; 
		break;
		case 3: 
			Zmija.y[0] -= Zmija.dimenzija; 	
		break;
		case 4: 
			Zmija.y[0] += Zmija.dimenzija;
		break;
	}	
},

updateZmija(){
	this.crtajZmiju();
},

centarGlave(){
	glavaX = this.x[0] + this.dimenzija / 2 ;
	glavaY = this.y[0] + this.dimenzija / 2 ;
}


};

