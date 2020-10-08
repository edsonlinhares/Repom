import { Component, OnInit } from '@angular/core';

import {registerLocaleData} from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { Cartao } from '../models/cartao';
import { Cliente } from '../models/cliente';
import { ClientesService } from '../services/clientes.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  cliente: Cliente = new Cliente();
  cartoes: Cartao[] = [];

  constructor(private clienteService: ClientesService) { }

  ngOnInit() {
    this.obterCliente();
    this.listarCartoes();
  }

  obterCliente() {
    console.log("Obtendo cliente");
    this.clienteService.obterCliente('51407843354')
      .subscribe(
        result => {
          this.cliente = result;
        },
        error => console.log(error)
      );
  }

  listarCartoes() {
    console.log("Obtendo cartoes");
    this.clienteService.listarCartoes('51407843354')
      .subscribe(
        result => {
          this.cartoes = result;
        },
        error => console.log(error)
      );
  }

}
