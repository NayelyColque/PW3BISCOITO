import { Component } from '@angular/core';
import { match } from 'assert';
import { BotaoComponent } from "../botao/botao.component";

@Component({
  selector: 'app-biscoito',
  imports: [BotaoComponent],
  templateUrl: './biscoito.component.html',
  styleUrl: './biscoito.component.css'
})
export class BiscoitoComponent {
  imagemSource = '/biscoito.png';
  frase: string = '';
  biscoitoAberto = false;

  protected frases: Array<string> = [
    "Acredite em si mesmo e tudo será possível.",
    "A sorte favorece aqueles que estão preparados.",
    "Cada novo dia é uma nova chance para brilhar.",
    "O segredo do sucesso é começar antes de estar pronto.",
    "Grandes conquistas começam com pequenos passos.",
    "Seja a mudança que você quer ver no mundo.",
    "O melhor momento para agir foi ontem. O segundo melhor é agora.",
    "Persistência transforma sonhos em realidade.",
    "Oportunidades não surgem, você as cria.",
    "A felicidade está nas pequenas coisas da vida."
  ];

  protected quebrarBiscoito(){
    if (!this.biscoitoAberto){
      this.biscoitoAberto=true
      this.imagemSource='/biscoito-aberto.png'
      this.frase = this.frases[Math.floor(Math.random() * this.frase.length)]
    }
  }

  reiniciarBiscoito(){
    this.biscoitoAberto=false
    this.imagemSource = '/biscoito.png'
    this.frase=''
  }
}
