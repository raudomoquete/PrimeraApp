import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  mensaje: string;
  identifParrafo: string;

  constructor() { 
    this.mensaje = "un saludo a todos";
    this.identifParrafo = 'ParrafoPrincipal';

    setTimeout(() => {
      this.mensaje = "Un saludo para Robelis";
    }, 5000);
  }

  ngOnInit(): void {
  }

  mostrarSaludo(): string {
    return "Un saludo para la madre de mis hijos"
  }

}
