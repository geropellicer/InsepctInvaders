import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  xSnake: number = 0;
  ySnake: number = 0;



  values = '';

  fila01 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila02 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila03 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila04 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila05 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila06 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila07 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila08 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila09 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila10 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila11 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila12 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila13 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila14 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
  fila15 = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';


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
  ];

  constructor() {}

  ngOnInit() {
    setTimeout(() => this.ActualizarFrame(), 200);
    this.ManejarInputs();
  }

  ActualizarFrame() {
    for (let i = 0; i < 15; i++) {
      this.filas[i] = '⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜';
    }
    this.filas[this.ySnake] = this.replaceAt(this.filas[this.ySnake], this.xSnake, '💀');
    setTimeout(() => this.ActualizarFrame(), 17);
  }

  ManejarInputs() {
    document.onkeydown = (e) => {
      console.log(' Presionaod' + e);
      if (e.key === 'w') {
        this.MoverArriba();
      }
      if (e.key === 'a') {
        this.MoverIzquierda();
      }
      if (e.key === 's') {
        this.MoverAbajo();
      }
      if (e.key === 'd') {
        this.MoverDerecha();
      }
    };
  }

  MoverIzquierda() {
    if (this.xSnake > 0) {
      this.xSnake -= 1;
      } else {
        this.xSnake = 14;
      }
    console.log(this.xSnake + ' ' + this.ySnake);
  }

  MoverDerecha() {
    if (this.xSnake < 14) {
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
      this.ySnake = 14;
    }
    console.log(this.xSnake + ' ' + this.ySnake);
  }

  MoverAbajo() {
    if (this.ySnake < 14) {
      this.ySnake += 1;
      } else {
        this.ySnake = 0;
      }
    console.log(this.xSnake + ' ' + this.ySnake);
  }

  replaceAt(s, index, replacement) {
    console.log(s);
    const a = s.substr(0, index) + replacement + s.substr(index + replacement.length - 1);
    console.log(a);
    return a;
  }

}
