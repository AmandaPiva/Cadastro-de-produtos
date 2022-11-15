import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { InterProd } from '../produto';
import { ProdutoServiceService } from '../produto-service.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {

  @Input() produto?: InterProd;
  
  getProdutos(): void{
    this.produtoService.getProdutos()
      .subscribe(produto => this.interface = produto)
  }

  constructor(private produtoService: ProdutoServiceService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  interface: InterProd[] = [];

  delete(prod:InterProd): void{
    console.log(prod.id);
    let i = 0;

    this.interface.forEach(item => {
      if(item === prod){
          this.interface.splice(i, 1);
      }
      i++;
    })

  }


}
