
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { AuthGuard } from './guardianes/auth.guard';
import { ConfiguracionGuard } from './guardianes/configuracion.guard';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { JuegoflexibilidadComponent } from './componentes/juegoflexibilidad/juegoflexibilidad.component';
import { MemoriaendeticaComponent } from './componentes/memoriaendetica/memoriaendetica.component';
import { JuegomemoriaComponent } from './componentes/juegomemoria/juegomemoria.component';

const routes: Routes = [
  {path: 'cliente', component: TableroComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: RegistroComponent, canActivate: [ConfiguracionGuard]},
  {path: 'configuracion', component: ConfiguracionComponent, canActivate: [AuthGuard]},
  {path: 'juegoflexibilidad', component: JuegoflexibilidadComponent, canActivate: [AuthGuard]},
  {path: 'memoriaendetica', component: MemoriaendeticaComponent, canActivate: [AuthGuard]},
  {path: 'ranking', component: TableroComponent, canActivate: [AuthGuard]},
  {path: 'juegomemoria', component: JuegomemoriaComponent, canActivate: [AuthGuard]},
  {path: 'cliente/editar/:id', component: EditarClienteComponent, canActivate: [AuthGuard]},
  {path: '', component: ClientesComponent, canActivate: [AuthGuard]},
  {path: '**', component: NoEncontradoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
