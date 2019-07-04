import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-juegomemoria',
  templateUrl: './juegomemoria.component.html',
  styleUrls: ['./juegomemoria.component.css']
})
export class JuegomemoriaComponent implements OnInit {

  count = 3;
  timer;
  temporizadorPalabras;
  contadorPalabras = 0;
  palabras1 = ['VENEZUELA', 'PORTUGAL', 'HONDURAS', 'NEPÁL', 'SUDÁFRICA', 'GRECIA', 'PANAMÁ', 'HONDURAS', 'AUSTRALIA', 'JAMAICA'];

  constructor() { }

  ngOnInit() {
    this.inicio();
  }

  inicio() {
    $('#imagen').hide();
    $('#radios').hide();
    $('#mostradorPalabras').hide();
  }
  endCountdown() {
    $('#count_num').hide();
    $('#imagen').show();
    $('#mostradorPalabras').show();
    $('#botonIniciaTest').hide();
    this.mostrarPalabras2();
  }
  mostrarPalabras() {
    if (this.contadorPalabras === 10) {
      clearInterval(this.temporizadorPalabras);
      $('#mostradorPalabras').hide();
      $('#radios').show();
    } else {
      $('palabras').val(this.palabras1[this.contadorPalabras]);
      this.contadorPalabras++;
    }
  }
  mostrarPalabras2() {
    this.temporizadorPalabras = setInterval(this.mostrarPalabras, 500);
  }

  empezarTest() {
    $('#botonIniciaTest').hide();
    $('#mostrarBoton').hide();
    $('#titulo3').hide();
    this.timer = setInterval(function() {
      this.handleTimer();
    }, 1000);
    $('#count_num').show();
  }
  handleTimer() {
    if (this.count === 0) {
      clearInterval(this.timer);
      this.endCountdown();
    } else {
      $('#count_num').html(this.count.toString);
      this.count--;
    }
  }
}
