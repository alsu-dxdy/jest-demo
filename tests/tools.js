module.exports.randomizer = () => {
  const min = 10;
  const max = 80;
  return Math.random() * (max - min) + min;
};

/**
 * Учитывая список целых чисел, найдите ближайшее к нулю. 
 * Если есть ничья, выберите положительное значение.
 */
module.exports.getClosestZero = (arr) => {
  if (arr.length < 1) return 0
  
  return arr.map(x => Math.abs(x))
            .sort((a,b) => a - b)[0]
}

/**
 * 
Учитывая список строк, найдите ту, которая ближе всего к 'zero'.
1) Слово близко к 'zero', если оно содержит одинаковые буквы.
2) Если более чем в одном слове содержатся одинаковые буквы, выберите самую короткую.
3) Если несколько букв имеют одинаковую длину, выберите ту, в которой буквы расположены в наиболее похожем порядке.
4) Если еще есть время, выберите тот, который появился первым в исходном списке
 */
module.exports.getClosestZeroStr = (arr) => {
  const pattern = 'zero'
  let globalRating = 0
  let resultString = ''

  if (arr.length < 1) return 0

  arr.forEach(str => {
    let localRating = 0
    for (let s of str) {
      if (pattern.includes(s)) {
        localRating += 1
      }      
    }
    if (localRating > globalRating) {
      globalRating = localRating
      resultString = str
    }
  })

  return resultString
}