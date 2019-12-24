/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(' ');
  let num = arr
      .join()
      .split(',')
      .map(item => parseFloat(item))
      .filter(item => isFinite(item))
      .sort(function compare (a, b) {
        return a - b;
      });

  let min = num.shift();
  let max = num.pop();
  // console.log(num.shift(), num.pop());
  return {min, max};
}
