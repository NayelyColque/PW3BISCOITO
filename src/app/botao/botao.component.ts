import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.component.html',
  styleUrl: './botao.component.css'
})
export class BotaoComponent {
  @Input() texto: string = '';
  @Input() classe: string = 'botao';
  @Input() desabilitado: boolean = false;
  
}
