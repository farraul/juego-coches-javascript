//////////// change screens//////////////////////////////////////// 
 screens = (arg_O) => {

    let fasewant = "fase" + arg_O;
    let arrFases = ["fase1", "fase2", "fase3", "fase4", "fase5", "fase6"];
    arrFases = arrFases.filter(val => !fasewant.includes(val));
    document.getElementById(fasewant).style.display = "block";

    for (let _f of arrFases) {
    document.getElementById(_f).style.display = "none";
    }
}



///////////class cars///////////////////////////////////////////////////////////////////////////////// 

const KM = 300;
class car {
    constructor() {
        this.km_recorridos = 0;
    }
    correr(aceleration) {
        this.km_recorridos += aceleration;
    }
}
///////declaration players//////////////////////////////////
let car1 = new car();
let car2 = new car();
let winner
////////////////////////////////////////////////////////////

while (car1.km_recorridos < KM && car2.km_recorridos < KM) {
    car1.correr(80);
    car2.correr(50);


    if(car1.km_recorridos>=300){
        // alert('Ha ganado coche 1')
        console.log('car1 ' + car1.km_recorridos);
        winner="Car 1";
        
    }
    if(car2.km_recorridos>=300){
        // alert('Ha ganado coche 2')
        console.log(' car2 ' + car2.km_recorridos);
        winner="Car 2";
    }
}

document.getElementById("ss").innerHTML =winner;




