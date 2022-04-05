import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProdutosService } from '../services/produtos.service';
import { Produto } from './../models/produto';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produtos : Observable <Produto[]>;
  displayedColumns = ['name', 'quantidade', 'valor'];

  //produtosService: ProdutosService;

  constructor(private produtosService: ProdutosService) {
    //this.produtosService = new ProdutosService();
    this.produtos = this.produtosService.list();
  }

  ngOnInit(): void {

  }

}
