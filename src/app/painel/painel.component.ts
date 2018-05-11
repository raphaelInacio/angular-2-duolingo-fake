import { Frase } from './../shared/frase.model';
import { FRASES } from './../shared/frase.mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = FRASES
  public instrucao: string = "Traduza a frase:"
  public resposta: string
  constructor() { }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    console.log(this.resposta)
  }

  public verificarResposta(): void {
    console.log(this.resposta)
  }

}
