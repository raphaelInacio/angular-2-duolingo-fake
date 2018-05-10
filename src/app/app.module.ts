import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PainelComponent } from './painel/painel.component';
import { TentativaComponent } from './tentativa/tentativa.component';
import { TopoComponent } from './topo/topo.component';
import { ProgressoComponent } from './progresso/progresso.component';


@NgModule({
  declarations: [
    AppComponent,
    PainelComponent,
    TentativaComponent,
    TopoComponent,
    ProgressoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
