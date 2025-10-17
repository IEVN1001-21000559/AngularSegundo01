export class OperacionesZodiaco {

  // Método para calcular la edad
  calcularEdad(anoNacimiento: number): number {
    let anoActual = new Date().getFullYear();
    let edad = anoActual - anoNacimiento;
    return edad;
  }

  // Método para obtener el signo zodiacal chino
  obtenerSignoChino(anoNacimiento: number): string {
    let restos = anoNacimiento % 12;
    let signos = [
      'Mono', 'Gallo', 'Perro', 'Cerdo', 'Rata', 'Buey',
      'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Cabra'
    ];

    return signos[restos];
  }


}
