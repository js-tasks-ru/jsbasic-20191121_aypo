/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
/*
* 1 вариант
*/
// function pow() {
//   let x = prompt(`enter x`);
//   let n = prompt(`enter n`);

//   if (n > 0) {
//     if (n % 1 === 0) {
//       return x ** n;
//     } else {
//       return `нужно целое число`;
//     }
//   } else {
//     return `нужно целое положительное число`;
//   }
// }

// alert(pow());

/*
* 2 вариант
*/

function pow(x, n) {
  let result = x ** n;
  return result;
}

// 3 Вариат
// function pow(x, n) {
//   let stepen = n< 0 ? console.log(`нужно больше 0`) :
//     (n % 1 != 0) ? console.log(`нужно целое число`) :
//       (x ** n);
//   return stepen;
// }
// pow();