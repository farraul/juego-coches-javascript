
///////////select-players/////////////////////

const allplayers =[];

choose = (id_player) =>{

    allplayers.push(id_player)

    console.log(allplayers)


    document.getElementById(id_player).className = "dark";
        //document.getElementById(id_player).onclick = "";
    }



///////////class car///////////////////////////////////////////////////

class car {
    constructor() {
        this.km_recorridos = 0;
    }
    correr(aceleration) {
        this.km_recorridos += aceleration;
    }
}

///////declaration variables//////////////////////////////////
let car1 = new car();
let car2 = new car();
let winner
const KM = 300;
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




