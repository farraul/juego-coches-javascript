///////////select-players/////////////////////

const allplayers =[];

choose = (id_player) =>{

    allplayers.push(id_player)
    document.getElementById(id_player).className = "dark";


   let length_array= allplayers.length;
 

   
    while(length_array==4){
        console.log("los coches son:");

        const car1_f = allplayers[0];
        const car2_f = allplayers[1];
        const car3_f = allplayers[2];
        const car4_f = allplayers[3];
    
        console.log(car1_f);
        console.log(car2_f);
        console.log(car3_f);
        console.log(car4_f);
      

        length_array+=1;
    }



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




