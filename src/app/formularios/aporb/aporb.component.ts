// Archivo: src/app/formularios/aporb/aporb.component.ts

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { aporb } from './aporb.model';

@Component({
  selector: 'app-aporb',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './aporb.component.html',
  styleUrls: ['./aporb.component.css']
})
export class AporbComponent implements OnInit {

  formulario!: FormGroup;
  resultado?: number;
  proceso_suma?: string;

  objAporb: aporb = new aporb();

  ngOnInit(): void {
    this.formulario = new FormGroup({
      numeroA: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')]),
      numeroB: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]+$')])
    });
  }


  calcular(): void {
    if (this.formulario.invalid) {
      return;
    }
    const valA = this.formulario.value.numeroA;
    const valB = this.formulario.value.numeroB;


    const calculo = this.objAporb.calcularPorSumas(valA, valB);


    this.resultado = calculo.resultado;
    this.proceso_suma = calculo.textoSuma;
  }
}
