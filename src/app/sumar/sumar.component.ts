import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  @Input() num1: number;
  @Input() num2: number;
  
  resultado: number;

  constructor() { 
    this.num1 = 9;
    this.num2 = 31;
    this.resultado = 0;
  }

  ngOnInit(): void {
  }

  onClick() {
    this.resultado = this.num1 + this.num2;
  }

}
