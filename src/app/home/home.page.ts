import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  xSnake: number = 15;
  ySnake: number = 29;
  xBala = 0;
  yBala = 0;
  balaFuncionando = false;

  refreshBalaTotal = 6;
  refreshBalaActual = 0;

  refreshUfosTotal = 25;
  refreshUfosActual = 0;

  derecha = true;

  ufos = [
    [2, 0, 1], [6, 0, 1], [10, 0, 1], [14, 0, 1], [18, 0, 1], [22, 0, 1],
    [4, 2, 1], [8, 2, 1], [12, 2, 1], [16, 2, 1], [20, 2, 1], [24, 2, 1],
    [2, 4, 1], [6, 4, 1], [10, 4, 1], [14, 4, 1], [18, 4, 1], [22, 4, 1],
 ];


  values = '';

  fila01 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila02 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila03 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila04 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila05 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila06 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila07 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila08 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila09 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila10 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila11 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila12 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila13 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila14 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila15 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila16 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila17 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila18 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila19 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila20 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila21 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila22 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila23 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila24 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila25 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila26 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila27 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila28 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila29 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila30 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';


  filas: string[] = [
    this.fila01,
    this.fila02,
    this.fila03,
    this.fila04,
    this.fila05,
    this.fila06,
    this.fila07,
    this.fila08,
    this.fila09,
    this.fila10,
    this.fila11,
    this.fila12,
    this.fila13,
    this.fila14,
    this.fila15,
    this.fila16,
    this.fila17,
    this.fila18,
    this.fila19,
    this.fila20,
    this.fila21,
    this.fila22,
    this.fila23,
    this.fila24,
    this.fila25,
    this.fila26,
    this.fila27,
    this.fila28,
    this.fila29,
    this.fila30,
  ];

  constructor() {}

  ngOnInit() {
    setTimeout(() => this.ActualizarFrame(), 200);
    this.ManejarInputs();
  }

  ActualizarFrame() {
    this.ActualizarUfos();


    for (let i = 0; i < this.filas.length; i++) {
      this.filas[i] = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
    }
    this.filas[this.ySnake] = this.replaceAt(this.filas[this.ySnake], this.xSnake, '⏹');
    this.filas[this.ySnake] = this.replaceAt(this.filas[this.ySnake], this.xSnake - 1, '⏹');
    this.filas[this.ySnake] = this.replaceAt(this.filas[this.ySnake], this.xSnake + 1, '⏹');
    this.filas[this.ySnake - 1] = this.replaceAt(this.filas[this.ySnake - 1], this.xSnake, '⏹');
    if (this.balaFuncionando) {
      this.filas[this.yBala - 1] = this.replaceAt(this.filas[this.yBala - 1], this.xBala, '⏫');
      this.MoverBala();
    }

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.ufos.length; i++) {
      if (this.ufos[i][2] === 1) {
        this.filas[this.ufos[i][1]] = this.replaceAt(this.filas[this.ufos[i][1]], this.ufos[i][0], '⬛');
      }
    }



    setTimeout(() => this.ActualizarFrame(), 17);
  }

  ManejarInputs() {
    document.onkeydown = (e) => {
      console.log(' Presionaod' + e);
      /*if (e.key === 'w') {
        this.MoverArriba();
      }*/
      if (e.key === 'a' || e.key === 'LEFT') {
        this.MoverIzquierda();
      }
      /*if (e.key === 's') {
        this.MoverAbajo();
      }*/
      if (e.key === 'd' || e.key === 'RIGHT') {
        this.MoverDerecha();
      }
      if (e.key === 'l' || e.key === 'SPACE') {
        this.DispararBala();
      }
    };
  }

  

  MoverIzquierda() {
    if (this.xSnake > 0) {
      this.xSnake -= 1;
      } else {
        this.xSnake = this.filas.length - 1;
      }
    console.log(this.xSnake + ' ' + this.ySnake);
  }

  MoverDerecha() {
    if (this.xSnake < this.filas.length - 1) {
      this.xSnake += 1;
      } else {
        this.xSnake = 0;
      }
    console.log(this.xSnake + ' ' + this.ySnake);
  }

  MoverArriba() {
    if (this.ySnake > 0) {
    this.ySnake -= 1;
    } else {
      this.ySnake = this.filas.length - 1;
    }
    console.log(this.xSnake + ' ' + this.ySnake);
  }

  MoverAbajo() {
    if (this.ySnake < this.filas.length - 1) {
      this.ySnake += 1;
      } else {
        this.ySnake = 0;
      }
    console.log(this.xSnake + ' ' + this.ySnake);
  }

  replaceAt(s, index, replacement) {
    const a = s.substr(0, index) + replacement + s.substr(index + replacement.length);
    return a;
  }


  ActualizarUfos() {
    this.refreshUfosActual++;
    if (this.refreshUfosActual >= this.refreshUfosTotal) {
      
      // tslint:disable-next-line: prefer-for-of
      // Obtener el de mas a la derecha
      // Obtener el de mas a l izuqierdsa

      let maxX = 0;
      let minX = Infinity;
      for (let i = 0; i < this.ufos.length; i++) {
        if(this.ufos[i][0] < minX) {
          minX = this.ufos[i][0];
        }
        if(this.ufos[i][0] > maxX) {
          maxX = this.ufos[i][0];
        }
      }

      for (let i = 0; i < this.ufos.length; i++) {
        if(this.derecha) {
          if (maxX < this.filas.length - 1) {
            this.ufos[i][0] ++;
          } else {
            this.BajarUfos();
            this.derecha = !this.derecha;
          }
        } else {
          if (minX > 0) {
            this.ufos[i][0] --;
          } else {
            this.BajarUfos();
            this.derecha = !this.derecha;
          }
        }
      }
      this.refreshUfosActual = 0;
    }
  }

  BajarUfos() {
    for (let i = 0; i < this.ufos.length; i++) {
      this.ufos[i][1] ++;
      if(!this.derecha) {
        this.ufos[i][0] --;
      } else if(this.derecha) {
        this.ufos[i][0] ++;
      }
    }
  }

  MoverBala() {
    this.refreshBalaActual ++;
    if (this.refreshBalaActual >= this.refreshBalaTotal) {
      if (this.yBala > 1) {
        this.yBala --;
      }
      this.refreshBalaActual = 0;
    }
    console.log(this.refreshBalaActual);
    console.log(this.refreshBalaTotal);
  }

  DispararBala() {
    this.balaFuncionando = true;
    this.yBala = this.filas.length - 2;
    this.xBala = this.xSnake;
  }

}
