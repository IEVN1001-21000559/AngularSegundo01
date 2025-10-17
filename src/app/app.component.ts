import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//import { DistanciaComponent } from './formularios/distancia/distancia.component';
//import { MultiplicacionComponent } from "./formularios/multiplicacion/multiplicacion.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { multiplicacionComponent } from "./formularios/multiplicacion/multiplicacion.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo01';

}
