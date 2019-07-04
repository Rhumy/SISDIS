import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario } from '../../modelo/usuario.model';
import { RecibePuntajeServicio } from '../../servicios/recibe-puntajes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.css']
})
export class TableroComponent implements OnInit, OnDestroy {

  opcion: string = 'Global';

  usuarios: Usuario[];

  subscripcion: Subscription;

  constructor(private recibePuntaje: RecibePuntajeServicio) { }

  ngOnInit() {
    this.pedirDatos(this.opcion);
  }
  ngOnDestroy(){
    this.subscripcion.unsubscribe();
  }
  onChange(opcion){
    this.opcion = opcion;
    this.pedirDatos(this.opcion);
  }

  pedirDatos(juego: string){
    this.subscripcion = this.recibePuntaje.recibePuntaje(juego).subscribe((usuarios: Usuario[]) => {
      this.usuarios = usuarios;
      console.log(usuarios);
    });
  }

}
