// distancia.component.ts
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Necesario para el pipe 'number'
import OperacionesDistancia from './operacionesdistancia';

@Component({
  selector: 'app-distancia',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent implements OnInit {


  operacion = new OperacionesDistancia();

  formularioDistancia!: FormGroup;
  distancia: number = 0;

  ngOnInit(): void {

    this.formularioDistancia = new FormGroup({
      x1: new FormControl(0, [Validators.required, Validators.pattern(/^-?\d*\.?\d*$/)]),
      y1: new FormControl(0, [Validators.required, Validators.pattern(/^-?\d*\.?\d*$/)]),
      x2: new FormControl(0, [Validators.required, Validators.pattern(/^-?\d*\.?\d*$/)]),
      y2: new FormControl(0, [Validators.required, Validators.pattern(/^-?\d*\.?\d*$/)]),
    });
  }

  calcularDistancia(): void {
    if (this.formularioDistancia.valid) {
      const valores = this.formularioDistancia.value;

      const x1 = parseFloat(valores.x1);
      const y1 = parseFloat(valores.y1);
      const x2 = parseFloat(valores.x2);
      const y2 = parseFloat(valores.y2);

      // Llamada al método de la clase de operaciones
      this.distancia = this.operacion.calcularDistancia(x1, y1, x2, y2);
    } else {
      this.distancia = 0;
      alert("Por favor, ingrese valores numéricos válidos en todas las coordenadas.");
    }
  }


}
