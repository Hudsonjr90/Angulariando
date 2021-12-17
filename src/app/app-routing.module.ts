import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EQ1InfoClientePerfilComponent } from './components/act1/eq1-info-clietn-profile/eq1-info-client-profile.component';
import { EQ2InfoModelCarsComponent } from './components/act1/eq2-info-model-cars/eq2-info-model-cars.component';
import { ActividadPropuestaComponent } from './components/actividad-propuesta/actividad-propuesta.component';

const routes: Routes = [
  {
    path: 'actividad-propuesta',
    component: ActividadPropuestaComponent,
  },
  {
    path: 'act1/eq1-info-client-profile',
    component: EQ1InfoClientePerfilComponent,
  },
  { path: 'act1/eq2-info-model-cars', component: EQ2InfoModelCarsComponent },
  { path: '**', component: ActividadPropuestaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
