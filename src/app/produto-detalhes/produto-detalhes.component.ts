import { Component, OnInit, Input} from '@angular/core';
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

}
