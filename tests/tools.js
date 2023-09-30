module.exports.randomizer = () => {
  const min = 10;
  const max = 80;
  return Math.random() * (max - min) + min;
};

/**
 * Учитывая список целых чисел, найдите ближайшее к нулю. Если есть ничья, выберите положительное значение.
 */
module.exports.getArr = (arr) => {
  return arr.map(x => Math.abs(x))
            .sort((a,b) => a - b)[0]
}
