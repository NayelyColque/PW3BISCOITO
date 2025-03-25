import { Component } from '@angular/core';
import { FrasesComponent } from '../frases/frases.component';

@Component({
  selector: 'app-imagem',
  imports: [FrasesComponent], 
  templateUrl: './imagem.component.html',
  styleUrl: './imagem.component.css'
})
export class ImagemComponent {
  imagemSource = '/biscoito.png';
  frasesOpen = false;

  changeImagemSource() {
    if (this.imagemSource === '/biscoito.png') {
      this.frasesOpen = true
      this.imagemSource = '/biscoito-aberto.png'
    } 
    else {
      this.frasesOpen = false
      this.imagemSource = '/biscoito.png'
    }
  }
}
