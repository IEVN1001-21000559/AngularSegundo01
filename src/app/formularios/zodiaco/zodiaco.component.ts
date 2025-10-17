import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OperacionesZodiaco } from './operacioneszodiaco';


@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent implements OnInit {


  operacion = new OperacionesZodiaco(); //mi clase logica

  formulario!: FormGroup;


  nombreCompleto: string = '';
  edad: number = 0;
  signo: string = '';

  resultadoVisible: boolean = false;

  ngOnInit(): void {
    
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apaterno: new FormControl('', [Validators.required]),
      amaterno: new FormControl('', [Validators.required]),
      dia: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(31)]),
      mes: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(12)]),
      ano: new FormControl(2000, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]),
      sexo: new FormControl('Masculino', [Validators.required])
    });
  }

  imprimir(): void {
    if (this.formulario.valid) {
      let valores = this.formulario.value;

      // 1. Calcular Edad y Signo usando la clase externa
      this.edad = this.operacion.calcularEdad(valores.ano);
      this.signo = this.operacion.obtenerSignoChino(valores.ano);

      // 2. Formatear el nombre completo
      this.nombreCompleto = `${valores.nombre} ${valores.apaterno} ${valores.amaterno}`;

      // 3. Mostrar la sección de resultados
      this.resultadoVisible = true;
    } else {
      this.resultadoVisible = false;
      alert("Por favor, complete todos los campos correctamente.");
    }
  }
}
