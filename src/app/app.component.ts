import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MathGame';
  // Enunciado de la operación
  enunciados = ['Enunciado 1', 'Enunciado 2', 'Enunciado 3', 'Enunciado 4', 'Enunciado 5', 'Enunciado 6']
  // Dos números para hacer la operación y el resultado
  numeros = [[5, 2, 35], [12, 8, 86], [125, 294, 419], [367, 156, 201], [23, 3, 69], [23, 3, 69]];
  // Las operaciones que se van a hacer
  operaciones = ['Potencia', 'Multiplicación', 'Suma', 'Resta', 'Multiplicación', 'Multiplicación'];
  // El resultado fue verdadero o falso?
  resultados = [null, null, null, null, null, null];
  // Los botones de verdadero y falso fueron seleccionados?
  seleccionado = [false, false, false, false, false, false];
  // Cantidad de resultados acertados
  acertados = 0;
  // Nivel
  nivelActual = null;

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
      /* case 'SuperFacil': {
        this.enunciados = ['Enunciado 1', 'Enunciado 2', 'Enunciado 3', 'Enunciado 4', 'Enunciado 5'];
        this.numeros = [[5, 2, 7], [12, 8, 22], [22, 17, 39], [13, 12, 25], [19, 3, 21]];
        this.operaciones = ['Suma', 'Suma', 'Suma', 'Suma', 'Suma'];
        this.reiniciar();
        break;
      } */
      case 'Facil': {
        this.enunciados = ['Calcular 0,5 al cuadrado', 'Calcular la potencia dos elevado a cinco', 'Calcular la potencia dos elevado a menos tres', '¿Cuántos huevos habrá en 12 cajas si en cada caja hay 12 docenas?', 'Un cubo cuyos lados miden m tiene un volumen de 343 centímetros cúbicos. La siguiente ecuación muestra el volumen del cubo', 'Cuál es la raíz cuarta de 81'];
        this.numeros = [[0.5, 2, 0.20], [2, 5, 32], [2, -3, 1/8], [12, 12, 140], [343, 3, 7], [81, 4, 3]];
        this.operaciones = ['Potencia', 'Potencia', 'Potencia', 'Potencia', 'Raíz', 'Raíz'];
        this.reiniciar();
        break;
      }
      case 'Medio': {
        this.enunciados = ['Calcular la potencia cuyo exponente es menos tres y cuya base es la potencia dos al cuadrado', 'Calcular el siguiente cociente de potencias con la misma base', 'Exponente Fraccionario', 'Fernando tuvo dos hijos. Cada uno de sus hijos tuvo 2 hijos, y cada uno de estos tuvo 2 hijos. ¿Cuántos nietos tuvo Fernando?', 'El área de un terreno cuadrangular es 3969 km2, calcular el valor de su lado', 'Exponente Fraccionario'];
        this.numeros = [[0.125, 2.0001, 1/64], [8, 32, 0.5], [8, 0.333, 2], [2.0001, 3.0001, 8], [1000, 1000, 83], [16, 0.5, 2]];
        this.operaciones = ['Potencia', 'Potencia', 'Potencia - Raíz', 'Potencia', 'Raíz', 'Potencia - Raíz'];
        this.reiniciar();
        break;
      }
      case 'Dificil': {
        this.enunciados = ['¿Cuánto mide el lado de un cuadrado de 169 m2 de superficie?', 'Calcular el producto de potencias de 2:', 'En un contenedor hay 20 cajones. En cada cajón hay 20 cajas, en cada caja hay 20 estuches y en cada estuche hay 20 rotuladores. ¿Cuántos rotuladores hay en cada cajón?', 'Calcular el siguiente producto de potencias', 'El patio de una escuela tiene 225 m2, cuánto medirá de largo si se sabe que es un cuadrado', 'Un terreno cuadrado tiene una superficie de 900 m2. ¿Cuántos metros lineales de alambre se necesitan para cercarlo?'];
        this.numeros = [[1000, 13, 13], [2, 2, 2], [0, 0, 8000], [18, 0, 16], [1000, 0, 20], [1000, 120, 120]];
        this.operaciones = ['Raíz', 'Potencia', 'Potencia', 'Potencia', 'Raíz', 'Raíz'];
        this.reiniciar();
        break;
      }
      /* case 'SuperDificil': {
        this.enunciados = ['Enunciado 1', 'Enunciado 2', 'Enunciado 3', 'Enunciado 4', 'Enunciado 5'];
        this.numeros = [[125, 3, 5], [10, 3, 10000], [205, 12, 2450], [512, 3, 8], [6, 3, 116]];
        this.operaciones = ['Raíz', 'Potencia', 'Multiplicación', 'Raíz', 'Potencia'];
        this.reiniciar();
        break;
      } */
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
        if (Math.round(Math.pow(this.numeros[posicion][0], this.numeros[posicion][1])) === Math.round(this.numeros[posicion][2])) {
          this.resultados[posicion] = true;
          this.acertados = this.acertados + 1;
        } else {
         this.resultados[posicion] = false;
        }
        this.seleccionado[posicion] = true;
        break;
      }
      case 'Raíz': {
        if (Math.round(Math.pow(this.numeros[posicion][0], 1/this.numeros[posicion][1])) === this.numeros[posicion][2]) {
          this.resultados[posicion] = true;
          this.acertados = this.acertados + 1;
        } else {
         this.resultados[posicion] = false;
        }
        this.seleccionado[posicion] = true;
        break;
      }
      case 'Potencia - Raíz': {
        if (Math.round(Math.pow(this.numeros[posicion][0], this.numeros[posicion][1])) === this.numeros[posicion][2]) {
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
         if (this.numeros[posicion][0] + this.numeros[posicion][1] !== this.numeros[posicion][2]) {
           this.resultados[posicion] = true;
           this.acertados = this.acertados + 1;
         } else {
          this.resultados[posicion] = false;
         }
         this.seleccionado[posicion] = true;
         break;
      }
      case 'Resta': {
        if (this.numeros[posicion][0] - this.numeros[posicion][1] !== this.numeros[posicion][2]) {
          this.resultados[posicion] = true;
          this.acertados = this.acertados + 1;
        } else {
         this.resultados[posicion] = false;
        }
        this.seleccionado[posicion] = true;
        break;
      }
      case 'Multiplicación': {
        if (this.numeros[posicion][0] * this.numeros[posicion][1] !== this.numeros[posicion][2]) {
          this.resultados[posicion] = true;
          this.acertados = this.acertados + 1;
        } else {
         this.resultados[posicion] = false;
        }
        this.seleccionado[posicion] = true;
        break;
      }
      case 'División': {
        if (this.numeros[posicion][0] / this.numeros[posicion][1] !== this.numeros[posicion][2]) {
          this.resultados[posicion] = true;
          this.acertados = this.acertados + 1;
        } else {
         this.resultados[posicion] = false;
        }
        this.seleccionado[posicion] = true;
        break;
      }
      case 'Potencia': {
        if (Math.round(Math.pow(this.numeros[posicion][0], this.numeros[posicion][1])) !== Math.round(this.numeros[posicion][2])) {
          this.resultados[posicion] = true;
          this.acertados = this.acertados + 1;
        } else {
         this.resultados[posicion] = false;
        }
        this.seleccionado[posicion] = true;
        break;
      }
      case 'Raíz': {
        if (Math.pow(this.numeros[posicion][0], 1/this.numeros[posicion][1]) !== this.numeros[posicion][2]) {
          this.resultados[posicion] = true;
          this.acertados = this.acertados + 1;
        } else {
         this.resultados[posicion] = false;
        }
        this.seleccionado[posicion] = true;
        break;
      }
      case 'Potencia - Raíz': {
        if (Math.pow(this.numeros[posicion][0], this.numeros[posicion][1]) !== this.numeros[posicion][2]) {
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
  hacerOperacionDificil(tipo, posicion) {
    switch (tipo) {
      case 'Verdadero': {
        if (this.numeros[posicion][1] === this.numeros[posicion][2]) {
          this.resultados[posicion] = true;
          this.acertados = this.acertados + 1;
        } else {
         this.resultados[posicion] = false;
        }
        this.seleccionado[posicion] = true;
        break;
      }
      case 'Falso': {
        if (this.numeros[posicion][1] !== this.numeros[posicion][2]) {
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

  // Reiniciar el juego
  reiniciar() {
    this.resultados = [null, null, null,null, null, null];
    this.seleccionado = [false, false, false,false, false, false];
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
    this.nivelActual = nivel;
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
