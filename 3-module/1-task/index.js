'use strict';
/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

// function showSalary (data, age) {
//   let result = data
//     .filter(db => db.age <= age)
//     .map(db => db.name + ', ' + db.balance)
//     .join(`\n`);
//   return result;
// }

// showSalary(data, 30);

function showSalary (data, age) {
  let result = data
    .filter(db => db.age <= age)
    .map(db => db.name + ', ' + db.balance)
    .join('\n');

  return result;
}
