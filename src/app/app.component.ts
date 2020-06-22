import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MathGame';
  // Dos números para hacer la operación y el resultado
  numeros = [[5, 2, 35], [12, 8, 86], [125, 294, 419], [367, 156, 201], [23, 3, 69]];
  // Las operaciones que se van a hacer
  operaciones = ['Potencia', 'Multiplicación', 'Suma', 'Resta', 'Multiplicación'];
  // El resultado fue verdadero o falso?
  resultados = [null, null, null, null, null];
  // Los botones de verdadero y falso fueron seleccionados?
  seleccionado = [false, false, false, false, false];
  // Cantidad de resultados acertados
  acertados = 0;

  // Parte de Inicio
  parteInicio = true;
  // Parte de Jugar
  parteJugar = false;
  // Parte de Instrucciones
  parteInstrucciones = false;

  // Cuando se selecciona el botón Verdadero
  hacerOperacionVerdadero(operacion, posicion) {
    switch (operacion) {
      case 'Suma': {
         if (this.numeros[posicion][0] + this.numeros[posicion][1] === this.numeros[posicion][2]) {
           this.resultados[posicion] = true;
           this.acertados = this.acertados + 1;
         } else {
          this.resultados[posicion] = false;
         }
         this.seleccionado[posicion] = true;
         break;
      }
      case 'Resta': {
        if (this.numeros[posicion][0] - this.numeros[posicion][1] === this.numeros[posicion][2]) {
          this.resultados[posicion] = true;
          this.acertados = this.acertados + 1;
        } else {
         this.resultados[posicion] = false;
        }
        this.seleccionado[posicion] = true;
        break;
      }
      case 'Multiplicación': {
        if (this.numeros[posicion][0] * this.numeros[posicion][1] === this.numeros[posicion][2]) {
          this.resultados[posicion] = true;
          this.acertados = this.acertados + 1;
        } else {
         this.resultados[posicion] = false;
        }
        this.seleccionado[posicion] = true;
        break;
      }
      case 'Potencia': {
        if (Math.pow(this.numeros[posicion][0], this.numeros[posicion][1]) === this.numeros[posicion][2]) {
          this.resultados[posicion] = true;
          this.acertados = this.acertados + 1;
        } else {
         this.resultados[posicion] = false;
        }
        this.seleccionado[posicion] = true;
        break;
      }
   }
  }

  // Cuando se selecciona el botón Falso
  hacerOperacionFalso(operacion, posicion) {
    switch (operacion) {
      case 'Suma': {
         if (this.numeros[posicion][0] + this.numeros[posicion][1] === this.numeros[posicion][2]) {
           this.resultados[posicion] = false;
         } else {
          this.resultados[posicion] = true;
          this.acertados = this.acertados + 1;
         }
         this.seleccionado[posicion] = true;
         break;
      }
      case 'Resta': {
        if (this.numeros[posicion][0] - this.numeros[posicion][1] === this.numeros[posicion][2]) {
          this.resultados[posicion] = false;
        } else {
         this.resultados[posicion] = true;
         this.acertados = this.acertados + 1;
        }
        this.seleccionado[posicion] = true;
        break;
      }
      case 'Multiplicación': {
        if (this.numeros[posicion][0] * this.numeros[posicion][1] === this.numeros[posicion][2]) {
          this.resultados[posicion] = false;
        } else {
         this.resultados[posicion] = true;
         this.acertados = this.acertados + 1;
        }
        this.seleccionado[posicion] = true;
        break;
      }
      case 'Potencia': {
        if (Math.pow(this.numeros[posicion][0], this.numeros[posicion][1]) === this.numeros[posicion][2]) {
          this.resultados[posicion] = false;
        } else {
         this.resultados[posicion] = true;
         this.acertados = this.acertados + 1;
        }
        this.seleccionado[posicion] = true;
        break;
      }
   }
  }

  // Reiniciar el juego
  reiniciar() {
    this.resultados = [null, null, null];
    this.seleccionado = [false, false, false];
    this.acertados = 0;
  }

  // Jugar
  jugar() {
    this.parteJugar = true;
    this.parteInicio = false;
    this.parteInstrucciones = false;
  }

  // Instrucciones
  instrucciones() {
    this.parteInstrucciones = true;
    this.parteInicio = false;
    this.parteJugar = false;
  }
}
