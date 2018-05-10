import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativa',
  templateUrl: './tentativa.component.html',
  styleUrls: ['./tentativa.component.css']
})
export class TentativaComponent implements OnInit {

  public coracaoVazio: String = '/assets/coracao_cheio.png'
  public coracaoCheio: String = '/assets/coracao_vazio.png'
  
  constructor() { }

  

  ngOnInit() {
  }

}
