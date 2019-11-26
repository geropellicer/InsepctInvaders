import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.scss'],
})
export class SnakeComponent implements OnInit {

  values = '';

  @Input() texto: string;

  constructor() { }

  ngOnInit() {
  }

  onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }

  

}
