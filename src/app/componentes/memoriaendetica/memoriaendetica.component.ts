import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memoriaendetica',
  templateUrl: './memoriaendetica.component.html',
  styleUrls: ['./memoriaendetica.component.css']
})
export class MemoriaendeticaComponent implements OnInit {


  nivel_dificultad: string;
  puntaje: number;
  count: number = 3;
  timer: number;
  random: number;
  respuesta:number;

  dif: string;
  tiempoDesaparecer: number;

  constructor() { }

  ngOnInit() {
    this.nivel_dificultad = '1';
    this.puntaje = 0;
    $("#panelTest").hide();
  }

  timeLeft: number = 3;
  interval;



  empezarTest() {
    $("#panelOpciones").hide();
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.pauseTimer();
          
          $("#contador").hide();
        this.test(this.nivel_dificultad);
        this.desaparecerNumeroRandom();// ekis dedededede
      }
    }, 1000)

  }

  desaparecerNumeroRandom() {
    this.tiempoDesaparecer = this.obtenerTiempoDesaparecer();
    setTimeout(function () {
      $("#panelNroRandom").hide();
      $("#panelTest").show();
    }, this.tiempoDesaparecer);
  }

  obtenerTiempoDesaparecer() {
    this.dif = this.nivel_dificultad;
    switch (this.dif) {
      case '1':
      case '2':
      case '3':
        return 2000;
      case '4':
        return 1500;
      case '9999':
        return 1000;
    }
  }


  test(nivelDificultad: string) {
    switch (nivelDificultad) {
      case '1':
        this.random = Math.floor(Math.random() * 10);
        break;
      case '2':
        this.random = Math.floor(Math.random() * 100);
        break;
      case '3':
        this.random = Math.floor(Math.random() * 1000);
        break;
      case '4':
        this.random = Math.floor(Math.random() * 10000);
        break;
      case '5':
        this.random = Math.floor(Math.random() * 100000);
        break;
      case '6':
        this.random = Math.floor(Math.random() * 1000000);
        break;
    }
  }
 

  pauseTimer() {
    clearInterval(this.interval);
  }


  calcularPuntaje(){
    alert('hola' + this.respuesta+'-->' + this.random);
    if(this.respuesta == this.random){
      this.puntaje = this.puntaje + parseInt(this.nivel_dificultad);
      alert(this.puntaje);
    }
  }

}
