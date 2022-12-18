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
  
}
