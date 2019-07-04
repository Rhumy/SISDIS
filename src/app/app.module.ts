import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { ClienteServicio } from './servicios/cliente.service';
import { LoginService } from './servicios/login.service';
import { AuthGuard } from './guardianes/auth.guard';
import { ConfiguracionServicio } from './servicios/configuracion.service';
import { ConfiguracionGuard } from './guardianes/configuracion.guard';

import { DataTablesModule } from 'angular-datatables';
import { ArchwizardModule } from 'angular-archwizard';
import { StartupComponent } from './componentes/startup/startup.component';
import { StartupServicio } from './servicios/startup.service';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { HttpClientModule } from '@angular/common/http';
import { EnviaCorreoServicio } from './servicios/envia-correo.service';
import { ChartsModule } from 'ng2-charts';
import { MemoriaendeticaComponent } from './componentes/memoriaendetica/memoriaendetica.component';
import { JuegoflexibilidadComponent } from './componentes/juegoflexibilidad/juegoflexibilidad.component';
import { JuegomemoriaComponent } from './componentes/juegomemoria/juegomemoria.component';
import { EnviaPuntajeServicio } from './servicios/envia-puntaje.service';



@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    ClientesComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    StartupComponent,
    TableroComponent,
    MemoriaendeticaComponent,
    JuegoflexibilidadComponent,
    JuegomemoriaComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firestore, 'control-clientes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    DataTablesModule,
    ArchwizardModule,
    ChartsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    ClienteServicio,
    StartupServicio,
    LoginService,
    AuthGuard,
    ConfiguracionServicio,
    ConfiguracionGuard,
    EnviaCorreoServicio,
    EnviaPuntajeServicio,
    { provide: FirestoreSettingsToken, useValue:{}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
