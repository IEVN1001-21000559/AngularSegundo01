import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { multiplicacionComponent } from "./formularios/multiplicacion/multiplicacion.component";
import { AporbComponent } from "./formularios/aporb/aporb.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, multiplicacionComponent, AporbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo01';
}
