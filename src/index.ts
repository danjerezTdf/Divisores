/* Ejercicio: Divisores
• Implemente un método llamado cantidadDeDivisores que
reciba un número entero y devuelva la cantidad de divisores
• Por ejemplo, para el número 16, sus divisores son 1, 2, 4, 8,
16, por lo que la respuesta debería ser 5
• Re-utilice el método esMultiplo implementado para el ejercicio
anterior
*/

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
