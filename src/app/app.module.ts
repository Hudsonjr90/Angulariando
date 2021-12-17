import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { EQ1InfoClientePerfilComponent } from './components/act1/eq1-info-clietn-profile/eq1-info-client-profile.component';
import { EQ2InfoModelCarsComponent } from './components/act1/eq2-info-model-cars/eq2-info-model-cars.component';
import { ActividadPropuestaComponent } from './components/actividad-propuesta/actividad-propuesta.component';
import { MenuComponent } from './components/util/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    EQ1InfoClientePerfilComponent,
    EQ2InfoModelCarsComponent,
    ActividadPropuestaComponent,
    MenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
