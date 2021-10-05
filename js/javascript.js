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
let car1 = new Car(1.1,"Denve");
let car2 = new Car(1.23,"Río");
let car3 = new Car(1.39,"Nairobi");
let car4 = new Car(1.3,"Lisboa");
let car5 = new Car(1.411,"Profesor");
let car6 = new Car(1.19,"Tokio");
let car7 = new Car(1.275,"Berlin");
let car8 = new Car(1.484,"Moscú");
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
let allcars= [];
const choose = (cocheElegido) => {

    document.getElementById(cocheElegido).className = "dark";
    document.getElementById(cocheElegido+"info").className = "greyinfo";
    document.getElementById(cocheElegido+"info-p1").className = "greyinfo2";

    allcars.push(traductorCoches[cocheElegido]);
     console.log(allcars);
     if (allcars.length ==4){
    
     result();
     screens(3);
     
    document.body.appendChild(player1)
    document.body.appendChild(player2)
    document.body.appendChild(player3)
    document.body.appendChild(player4)
     }
}

///////////////////////////////////////////////////////////////////////////////
let winner = '';
const KM = 3000;

const result = () => {
    document.getElementById("result-car-1").innerHTML =allcars[0].nombre;
    document.getElementById("result-car-2").innerHTML =allcars[1].nombre;
    document.getElementById("result-car-3").innerHTML =allcars[2].nombre;
    document.getElementById("result-car-4").innerHTML =allcars[3].nombre;

    while (allcars[0].km_recorridos < KM && allcars[1].km_recorridos < KM && allcars[2].km_recorridos < KM && allcars[3].km_recorridos < KM) 
    {
        car1.correr();
        car2.correr();
        car3.correr();
        car4.correr();
        car5.correr();
        car6.correr();
        car7.correr();
        car8.correr();
        if(allcars[0].km_recorridos>=3000){
            winner='El '+ allcars[0].nombre + ' es el ganador!'; 
        }
        if(allcars[1].km_recorridos>=3000){
            winner='El '+ allcars[1].nombre + ' es el ganador!';
        }
        if(allcars[2].km_recorridos>=3000){
            winner='El '+ allcars[2].nombre + ' es el ganador!';
        }
        if(allcars[3].km_recorridos>=3000){
            winner='El '+ allcars[3].nombre + ' es el ganador!';
        }
        
    }
    document.getElementById("ss").innerHTML =winner;

}

// parte  que corre el coche

const player1 = document.createElement('div')
const player2 = document.createElement('div')
const player3 = document.createElement('div')
const player4 = document.createElement('div')

player1.style.cssText = `
bottom: 30px;
position: fixed;
left: 50px;
background-image:url(img/car-run-1.png);
background-size: contain;
width: 180px;
height: 140px;
background-repeat: no-repeat;
`

player2.style.cssText = `
bottom: 150px;
position: fixed;
left: 50px;
background-image:url(img/car-run-4.png);
background-size: contain;
width: 150px;
height: 60px;
background-repeat: no-repeat;
`

player3.style.cssText = `
bottom: 240px;
position: fixed;
left: 50px;
background-image:url(img/car-run-3.png);
background-size: contain;
width: 160px;
height: 85px;
background-repeat: no-repeat;

`

player4.style.cssText = `
bottom: 295px;
position: fixed;
left: 50px;
background-image:url(img/car-run-2.png);
background-size: contain;
width: 170px;
height: 80px;
background-repeat: no-repeat;
`
let car_cont1= 50;
let car_cont2= 50;
let car_cont3= 50;
let car_cont4= 50;
let identificadorTiempoDeEspera;

document.body.addEventListener('keydown', function(event) {

    if(allcars.length > 0) {
        if(event.keyCode === 32){
            const vel = 2
            const maxWidth = window.screen.width
            document.body.appendChild(player1)
            document.body.appendChild(player2)
            document.body.appendChild(player3)
            document.body.appendChild(player4)
            let num = 1
            const interval = setInterval( () => 
            {
                //Math.floor(Math.random() * 10) + 1;
                if(+player1.style.left.replace('px', '') <= maxWidth && +player2.style.left.replace('px', '') <= maxWidth +player3.style.left.replace('px', '') <= maxWidth +player4.style.left.replace('px', '') <= maxWidth){
                    player1.style.left = `${allcars[0].velocidad  + +player1.style.left.replace('px', '')}px`
                    player2.style.left = `${allcars[1].velocidad  + +player2.style.left.replace('px', '')}px`
                    player3.style.left = `${allcars[2].velocidad + +player3.style.left.replace('px', '')}px`
                    player4.style.left = `${allcars[3].velocidad  + +player4.style.left.replace('px', '')}px`
                }
                else {
                    clearInterval(interval)
                    screens(4);
                }
            },10)
     }
}    
})





