/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
 /*
function sum(m, n) {
	let a = +prompt("Введите первое число m", " ");
	let b = +prompt("Введите второе число n", " ");
	let x = a + b;
	let phrase;

	if (x === 2) {
		phrase = "Ура, вы получили " + x;
	} else if (x === 7) {
		phrase = "Ура, вы получили " + x;
	} else {
		phrase = "Ошибка("
	}

	alert(phrase);
}

sum()
*/

function sum(m, n) {
  return m + n;
}
let result = sum(1, 1) === 2;
let result2 = sum(2, 5) === 7;
alert (result);
alert (result2);