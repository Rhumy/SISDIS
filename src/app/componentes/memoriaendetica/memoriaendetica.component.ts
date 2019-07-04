import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { EnviaPuntajeServicio } from 'src/app/servicios/envia-puntaje.service';
import { Usuario } from 'src/app/modelo/usuario.model';
import { LoginService } from 'src/app/servicios/login.service';
import { emailPojo } from 'src/app/modelo/emailPojo.model';
import { EnviaCorreoServicio } from 'src/app/servicios/envia-correo.service';
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
  respuesta: number;
  timeLeft: number;
  interval;
  dif: string;
  tiempoDesaparecer: number;
  usuario: Usuario={
    nickname:'',
    juego:'',
    puntaje:0
  };
  emailPojo: emailPojo={
    toName:'',
    toEmail:'',
    fromName:'',
    fromEmail:'',
    emailSubject:'',
    message:''
  };
  isLoggedIn: boolean;
  loggedInUser: string;


  constructor(private enviaPuntaje: EnviaPuntajeServicio,
    private loginService:LoginService,
    private enviaCorreo: EnviaCorreoServicio) { }

  ngOnInit() {
    this.nivel_dificultad = '1';
    this.puntaje = 0;
    $("#panelTest").hide();
    this.loginService.getAuth().subscribe( auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email;
      }
      else{
        this.isLoggedIn = false;
      }
    });
  }





  empezarTest() {
    $("#panelOpciones").hide();
    $("#panelTest").hide();
    $("#contador").show();
    this.timeLeft = 3;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.pauseTimer();
        $("#contador").hide();
        $("#panelNroRandom").show();
        this.test(this.nivel_dificultad);
        this.desaparecerNumeroRandom();
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
        return 1800;
      case '5':
        return 1500;
      case '6':
        return 1200;
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


  calcularPuntaje() {
    if (this.respuesta == this.random) {
      this.puntaje = this.puntaje + parseInt(this.nivel_dificultad);
      this.respuesta = null;
      this.empezarTest();
    } else {
    
      this.usuario.juego = 'J1';
      this.usuario.nickname= this.loggedInUser;
      this.usuario.puntaje= this.puntaje;
      this.enviaPuntaje.enviaPuntaje(this.usuario).subscribe(
        emailPojo=>{
          Swal.fire(
            'Listo!',
            'Se guardo el puntaje!',
            'success'
          );
        }
      );
      this.emailPojo.emailSubject = 'Puntaje Obtenido';
      this.emailPojo.fromEmail = "raul.jimenez1@unmsm.edu.pe";
      this.emailPojo.fromName = "Grupo Sistemas Distribuidos";
      this.emailPojo.message = "Ha obtenido "+this.puntaje + " puntos";
      this.emailPojo.toEmail = this.loggedInUser;
      this.emailPojo.toName = ".....";



      this.enviaCorreo.sendMail(this.emailPojo).subscribe(
        emailPojo=>{
          Swal.fire(
            'Listo!',
            'Se envio el correo',
            'success'
          );
        }
      );

    }

  }

}
