import { JogoDaVelhaService } from './shared/jogo-da-velha.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogodaVelhaService: JogoDaVelhaService) { }

  ngOnInit() {
    this.jogodaVelhaService.inicializar();
  }
  /**retorna se a tela de inicio deve ser exibida */
  get showInicio():boolean{
    return this.jogodaVelhaService.showInicio;
  }
  /**retorna se o tabuleiro deve ser exibido */
  get showTabuleiro():boolean{
    return this.jogodaVelhaService.showTabuleiro;
  }
  /**retorna se a tela de final deve ser exibida */
  get showFinal():boolean{
    return this.jogodaVelhaService.showFinal;
  }
  /**inicializa os dados de um novo jogo */
  iniciarJogo():void{
    this.jogodaVelhaService.iniciarJogo();
  }
  /**realiza uma jogada o clicar no tabuleiro */
  jogar(posX: number, posY:number): void{
    this.jogodaVelhaService.jogar(posX, posY);
  }
  /**retorna se a peça X deve ser exibida */
  exibirX(posX:number, posY:number):boolean{
    return this.jogodaVelhaService.exibirX(posX,posY);
  }
  /**retorna se a peça 0 deve ser exibida */
  exibirO(posX:number, posY:number):boolean{
    return this.jogodaVelhaService.exibirO(posX,posY);
  }
  /**retorna se a marcacao de vitoria deve ser exibida */
  exibirVitoria(posX:number, posY:number):boolean{
    return this.jogodaVelhaService.exibirVitoria(posX,posY);
  }

  /**verifica se um jogador venceu */
  get jogador(): number {
    return this.jogodaVelhaService.jogador;
  }

  /**
   * Inicia um novo jogo.
   */
  novoJogo(): void {
    this.jogodaVelhaService.novoJogo();
  }

}
