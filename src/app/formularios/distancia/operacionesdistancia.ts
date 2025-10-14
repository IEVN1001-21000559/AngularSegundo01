// operacionesdistancia.ts

export default class OperacionesDistancia {


  calcularDistancia(x1: number, y1: number, x2: number, y2: number): number {


    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    const deltaXCuadrado = deltaX * deltaX;
    const deltaYCuadrado = deltaY * deltaY;

    const distancia = Math.sqrt(deltaXCuadrado + deltaYCuadrado);

  
    return parseFloat(distancia.toFixed(2));
  }
}
