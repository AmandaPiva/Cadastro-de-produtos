import { Component, OnInit } from '@angular/core';
import { InterProd } from '../produto';
import { ProdutoServiceService } from '../produto-service.service';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  //Trazendo o mock de produtos criado do mock-produtos.ts
  interface: InterProd[] = [];

  //Novo objeto do tipo ProdNew para cadastro de novos produtos
  

  getProdutos(): void{
    this.produtoService.getProdutos()
      .subscribe(produto => this.interface = produto)
  }
   
 
  constructor(private produtoService: ProdutoServiceService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  //adicionar o onSelect
  selectedProd?: InterProd;
  onSelect(produto: InterProd): void{
    this.selectedProd = produto;
  }

  prodNew: InterProd = {
    id: 0,
    name: '',
    type: '',
    preco: 0,
    marca: ''
}

  create(): void{
    if(this.prodNew.id != 0 && this.prodNew.name != '' && this.prodNew.type != '' && this.prodNew.preco != 0 && this.prodNew.marca != ''){
        if(this.interface.length == 0){
          this.prodNew!.id = 1;
          this.interface.push(this.prodNew!);
          this.prodNew! = {
            id: 0,
            name: '',
            type: '',
            preco: 0,
            marca: ''
          };
        }
        else{
          let size = this.interface[this.interface.length -1].id +1;
          this.prodNew!.id = size;
          this.interface.push(this.prodNew!);
          this.prodNew! = {
            id: 0,
            name: '',
            type: '',
            preco: 0,
            marca: ''
          };
        }
    }
 }


}
