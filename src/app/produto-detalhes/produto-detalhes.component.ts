import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { InterProd } from '../produto';
import { ProdutoServiceService } from '../produto-service.service'; //importando o services 

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {

  @Input() produto?: InterProd; //decorator identificador de dados que estão sendo passados pelo componente pai para o filho
  
  getProdutos(): void{  //Construtor (obrigatório trazer pois ele contém o código que pega os dados do Back End e trás ao componente)
    this.produtoService.getProdutos()
      .subscribe(produto => this.interface = produto)
  }

  prodNew: InterProd = {
    id: 0,
    name: '',
    type: '',
    preco: 0,
    marca: ''
}

  constructor(private produtoService: ProdutoServiceService) { }

  ngOnInit(): void {  //Onde de fato injetamos o nosso contructor
    this.getProdutos();
  }

  //função botão excluir
  interface: InterProd[] = [];

  delete(prod:InterProd): void{
    console.log(prod.id);
    let i = 0;

    this.interface.forEach(item => {
      if(item === prod){
          this.interface.splice(i, 1);  //função splice que exclui o elemento do array que está sendo percorrido
      }
      i++;  //Está sendo verificado pelo índice
    })

  }


  //função adicionar produto
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
