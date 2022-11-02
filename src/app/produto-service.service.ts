import { Injectable } from '@angular/core';
import {InterProd} from './produto';
import {PROD} from './mock-produtos'
import { Observable, of } from 'rxjs'; //Importando o Observable

@Injectable({
  providedIn: 'root'
})
export class ProdutoServiceService {

  getProdutos(): Observable<InterProd[]>{
    const produto = of(PROD);
    return produto;
  }

  constructor() { }
}
