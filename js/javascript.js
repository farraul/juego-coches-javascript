////////////////class car//////////////////////////////////////////////////////

class Car {
    constructor(velocidad ,nombre) {
       this.velocidad=velocidad;
       this.nombre=nombre;
       this.km_recorridos = 0;
    }

    correr() {
      this.km_recorridos += this.velocidad;
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
let coche3 = "";
let coche4 = "";

const choose = (cocheElegido) => {

    document.getElementById(cocheElegido).className = "dark";
    document.getElementById(cocheElegido+"info").className = "greyinfo";
   
}

   // [cochesElegidos].push=[traductorCoches[cocheElegido]];
   // console.log[cocheElegido];

 /*   if(coche1 == ""){
        coche1 = traductorCoches[cocheElegido]; 
    }else{
            if(coche2 == ""){
                coche2 = traductorCoches[cocheElegido];  
            }else{
                    if(coche3 == ""){
                        coche3 = traductorCoches[cocheElegido];  

                        console.log("esta3"+coche3)
                    }else{
                                coche4 = traductorCoches[cocheElegido];  
                                console.log("esta4"+coche4)
                                result();
                        }
                }
        }
}*/


    /*
    if(coche1 == ""){
        coche1 = traductorCoches[cocheElegido];
    
    } else {
        coche2 = traductorCoches[cocheElegido];
        result();
    }
}
*/
///////////////////////////////////////////////////////////////////////////////
let winner = '';
const KM = 300;

const result = () => {
   
    
while (coche1.km_recorridos < KM && coche2.km_recorridos < KM && coche3.km_recorridos < KM && coche4.km_recorridos < KM) {
    console.log("los coches que han corrido son coche1: " +  coche1.km_recorridos   + ' coche2 '+ coche2.km_recorridos +' coche3 '+ coche3.km_recorridos +' coche4 '+ coche4.km_recorrido);

    coche1.correr();
    coche2.correr();
    coche3.correr();
    coche4.correr();

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
    if(coche3.km_recorridos>=300){
        // alert('Ha ganado coche 2')
        console.log( coche3.nombre + ' coche 3 es el ganador' + coche3.km_recorridos );
        winner= coche3.nombre + ' es el ganador';
    }
    if(coche4.km_recorridos>=300){
        // alert('Ha ganado coche 2')
        console.log( coche4.nombre + ' coche 4 es el ganador' + coche4.km_recorridos );
        winner= coche4.nombre + ' es el ganador';
    }
}
document.getElementById("ss").innerHTML =winner;

}

//raul parte  que corre el coche

const player1 = document.createElement('div')

player1.id = 'player'
player1.style.cssText = `
    position: fixed;
    bottom: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: blue;
`


document.body.addEventListener('keydown', function(event) {
    
    if(event.keyCode === 87){
        const currentPlace = player1.style.left.replace('px', '')
        console.log(currentPlace, 'current postiion')
        
        player1.style.left = `${+currentPlace + 300}px`
    }
})
//document.body.appendChild(player1)


