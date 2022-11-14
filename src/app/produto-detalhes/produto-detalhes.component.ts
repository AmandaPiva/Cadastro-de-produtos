import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { InterProd } from '../produto';


@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {

  @Input() produto?: InterProd;

  constructor() { }

  ngOnInit(): void {
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
