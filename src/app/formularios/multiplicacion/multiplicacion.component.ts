import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


//Esta es la clase que mandamos llamar
@Component({
  selector: 'app-multiplicacion',
  imports: [FormsModule, ReactiveFormsModule], //Aqui se trabajan con formularios que crean objetos,
  templateUrl: './multiplicacion.component.html',
  styleUrl: './multiplicacion.component.css'
})
export class multiplicacionComponent {
  formulario!:FormGroup;    //Aqui definimos la instancia de este objeto
  resultado!:number;
  constructor(){ }

  ngOnInit(): void {
    this.formulario = new FormGroup({
      numero1: new FormControl(''),
      numero2: new FormControl('')
    });

  }
  multNumeros():void{
    let n1 = this.formulario.value.numero1;
    let n2 = this.formulario.value.numero2;
    this.resultado = n1 * n2;
  }
}
