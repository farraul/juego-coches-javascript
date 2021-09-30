////////////////class car//////////////////////////////////////////////////////

class Car {
    constructor(velocidad ,nombre) {
       this.velocidad=velocidad;
       this.nombre=nombre;
       this.km_recorridos = 0;
    }

    correr() {
        return this.km_recorridos += this.velocidad;
    }
}

//////////////declaration variables//////////////////////////////////////////////
let car1 = new Car(81,"coche 1");
let car2 = new Car(50,"coche 2");
let car3 = new Car(131,"coche 3");
let car4 = new Car(80,"coche 4");
let car5 = new Car(21,"coche 5");
let car6 = new Car(10,"coche 6");
let car7 = new Car(71,"coche 7");
let car8 = new Car(40,"coche 8");

///////////traductor/////////////////////////////////////////////////////////////
let traductorCoches = {
    "coche1" : car1,
    "coche2" : car2,
    "coche3" : car3,
    "coche4" : car4,
    "coche5" : car5,
    "coche6" : car6,
    "coche7" : car7,
    "coche8" : car8,
}

let coche1 = "";
let coche2 = "";

const choose = (cocheElegido) => {

    document.getElementById(cocheElegido).className = "dark";

    if(coche1 == ""){
        coche1 = traductorCoches[cocheElegido];
    
    } else {
        coche2 = traductorCoches[cocheElegido];
        result();
    }
}

///////////////////////////////////////////////////////////////////////////////
let winner = '';
const KM = 300;

const result = () => {
   
    
while (coche1.km_recorridos < KM && coche2.km_recorridos < KM) {
    console.log("los coches que han corrido son coche1: " ,  coche1.km_recorridos  + ' coche2 ' , coche2.km_recorridos);

    coche1.correr();
    coche2.correr();

    if(coche1.km_recorridos>=300){
    
        // alert('Ha ganado coche 1')
        console.log( coche1.nombre + ' es el ganador ' +  coche1.km_recorridos );
        winner= coche1.nombre + ' es el ganador';
        
    }
    if(coche2.km_recorridos>=300){
        // alert('Ha ganado coche 2')
        console.log( coche2.nombre + ' coche 2 es el ganador' + coche2.km_recorridos );
        winner= coche2.nombre + ' es el ganador';
    }
}
document.getElementById("ss").innerHTML =winner;

}
