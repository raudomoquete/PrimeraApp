import { Component } from '@angular/core';
import { Tarea } from './models/tarea.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrayTareas: Tarea[];

  constructor() {
    this.arrayTareas = [];
  }

  onTareaCreada($event: Tarea) {
    this.arrayTareas.push($event);
    console.log(this.arrayTareas);
  }
  
}
