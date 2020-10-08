import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ClientesAppComponent} from './clientes.app.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const clientesRouterConfig: Routes = [
    {
        path: '', component: ClientesAppComponent,
        children: [
            { path: 'detalhes', component: DetalhesComponent }, 
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(clientesRouterConfig)
    ],
    exports: [RouterModule]
})

export class ClientesRoutingModule { }