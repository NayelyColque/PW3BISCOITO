import { Component } from '@angular/core';

@Component({
  selector: 'app-frases',
  imports: [],
  templateUrl: './frases.component.html',
  styleUrls: ['./frases.component.css']
})
export class FrasesComponent {
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
  
  protected selectedFrase: string = '';

  public constructor() {
    this.selectRandomFrase();
  }

  protected selectRandomFrase() {
    const index = Math.floor(Math.random() * this.frases.length);
    this.selectedFrase = this.frases[index];
  }
}
