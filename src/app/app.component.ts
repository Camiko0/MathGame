import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MathGame';
  operaciones = [[1,2,3],[4,5,6],[7,8,9]];
  resultados = [null,null,null];
  isVisible = false;
  error: string = null;

  closeError() {
    this.error = null;
  }

  hacerOperacionVerdadero(operacion, numeros){
    if (operacion == "SUMA"){
      if (this.operaciones[numeros][0] + this.operaciones[numeros][1] == this.operaciones[numeros][2]){
        this.resultados[numeros] = true;
      }
      else {
        this.resultados[numeros] = false;
      }
    }
  }

  hacerOperacionFalso(operacion, numeros){
    if (operacion == "SUMA"){
      if (this.operaciones[numeros][0] + this.operaciones[numeros][1] != this.operaciones[numeros][2]){
        this.resultados[numeros] = true;
      }
      else {
        this.resultados[numeros] = false;
      }
    }
  }
}
