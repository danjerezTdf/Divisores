let valorInUno: number = Number(prompt(`Ingrese Valor a verificar:`));
let resultado: number = 0;

function cantidadDeDivisibles(valorUno: number): number {
  //let respuesta:number =0;
  let contador: number = 0;
  for (let i: number = 1; i <= valorUno; i++) {
    if (valorUno % i === 0) {
      contador++;
      console.log(contador);
    }
  }
  return contador;
}

resultado = cantidadDeDivisibles(valorInUno);
console.log(`la cantidad de divisores es: ${resultado}`);
