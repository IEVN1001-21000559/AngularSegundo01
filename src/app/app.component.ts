import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DistanciaComponent } from './formularios/distancia/distancia.component';
//import { MultiplicacionComponent } from "./formularios/multiplicacion/multiplicacion.component";
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    DistanciaComponent,
    //MultiplicacionComponent
    // ... otros componentes/módulos
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo01';

}
