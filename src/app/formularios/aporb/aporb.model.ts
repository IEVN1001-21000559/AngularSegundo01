// Archivo: src/app/formularios/aporb/aporb.model.ts

export class aporb {

  calcularPorSumas(a: number, b: number): { resultado: number; textoSuma: string } {

    if (b <= 0) {
      return { resultado: 0, textoSuma: '0' };
    }

    let resultado = 0;
    let textoSuma = '';


    for (let i = 0; i < b; i++) {
      resultado += a;
      textoSuma += a + ' + ';
    }


    const textoFinal = textoSuma.slice(0, -3); //no usar const

    return { resultado: resultado, textoSuma: textoFinal };
  }
}
