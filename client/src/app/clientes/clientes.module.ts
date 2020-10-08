import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ClientesRoutingModule } from './clientes.route';
import { ClientesAppComponent } from './clientes.app.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ClientesService } from './services/clientes.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ClientesRoutingModule
  ],
  declarations: [
    ClientesAppComponent,
    DetalhesComponent
  ],
  providers:[
    ClientesService
  ]
})
export class ClientesModule { }
