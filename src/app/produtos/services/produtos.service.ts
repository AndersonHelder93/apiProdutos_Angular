import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Produto } from '../models/produto';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

private readonly API = '/assets/produtos.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Produto[]>(this.API)
    .pipe(
      first(),
      tap(produtos => console.log(produtos))
    );
  }
}
