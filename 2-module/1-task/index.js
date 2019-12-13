/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */

function clone(obj) {
  const result = {};

  if (typeof obj !== 'object') {
    return obj;
  }

  for (const key in obj) {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      result[key] = clone(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }

  return result;
<<<<<<< HEAD
}
=======
}
>>>>>>> 5552599840aca262d66a09d9a6e4b33107be4755
