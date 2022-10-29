import { Component, OnInit } from '@angular/core';
import { InterProd } from '../produto';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  //Trazendo a interface criada do produto.ts
  interface: InterProd = {
    id: 1,
    name: "Geladeira",
    type: "Eletrodomésticos",
    preco: 1500.00,
    marca: "LG"
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
