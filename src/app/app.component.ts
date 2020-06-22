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
  // Parte de Nivel
  parteNivel = false;
  // Parte de Jugar
  parteJugar = false;
  // Parte de Instrucciones
  parteInstrucciones = false;

  // Seleccionar las operaciones según el nivel de dificultad
  operacionesPorNivel(nivel) {
    switch (nivel) {
      case 'SuperFacil': {
        this.numeros = [[5, 2, 7], [12, 8, 22], [22, 17, 39], [13, 12, 25], [19, 3, 21]];
        this.operaciones = ['Suma', 'Suma', 'Suma', 'Suma', 'Suma'];
        this.reiniciar();
        break;
      }
      case 'Facil': {
        this.numeros = [[21, 43, 74], [47, 32, 16], [87, 34, 53], [65, 34, 99], [77, 22, 45]];
        this.operaciones = ['Suma', 'Resta', 'Resta', 'Suma', 'Resta'];
        this.reiniciar();
        break;
      }
      case 'Medio': {
        this.numeros = [[12, 4, 48], [127, 32, 95], [100, 4, 25], [128, 4, 30], [20, 4, 100]];
        this.operaciones = ['Multiplicación', 'Resta', 'División', 'División', 'Multiplicación'];
        this.reiniciar();
        break;
      }
      case 'Dificil': {
        this.numeros = [[240, 40, 5], [2, 4, 16], [123, 4, 392], [600, 3, 20], [4, 3, 64]];
        this.operaciones = ['División', 'Potencia', 'Multiplicación', 'División', 'Potencia'];
        this.reiniciar();
        break;
      }
      case 'SuperDificil': {
        this.numeros = [[125, 3, 5], [10, 3, 10000], [205, 12, 2450], [512, 3, 8], [6, 3, 116]];
        this.operaciones = ['Raíz', 'Potencia', 'Multiplicación', 'Raíz', 'Potencia'];
        this.reiniciar();
        break;
      }
   }
  }

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
      case 'División': {
        if (this.numeros[posicion][0] / this.numeros[posicion][1] === this.numeros[posicion][2]) {
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
      case 'Raíz': {
        if (this.numeros[posicion][1] === 2) {
          if (Math.sqrt(this.numeros[posicion][0]) === this.numeros[posicion][2]) {
            this.resultados[posicion] = true;
            this.acertados = this.acertados + 1;
          } else {
           this.resultados[posicion] = false;
          }
        } else if (this.numeros[posicion][1] === 3) {
          if (Math.cbrt(this.numeros[posicion][0]) === this.numeros[posicion][2]) {
            this.resultados[posicion] = true;
            this.acertados = this.acertados + 1;
          } else {
           this.resultados[posicion] = false;
          }
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

  // Niveles
  nivel() {
    this.parteNivel = true;
    this.parteInicio = false;
    this.parteJugar = false;
    this.parteInstrucciones = false;
  }

  // Jugar
  jugar(nivel) {
    this.parteJugar = true;
    this.parteInicio = false;
    this.parteNivel = false;
    this.parteInstrucciones = false;
    this.operacionesPorNivel(nivel);
  }

  // Instrucciones
  instrucciones() {
    this.parteInstrucciones = true;
    this.parteInicio = false;
    this.parteJugar = false;
    this.parteNivel = false;
  }
}
