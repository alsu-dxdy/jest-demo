const {randomizer, getArr} = require('./tools');


describe('Проверка функции randomizer', () => {
    it('Генерирует число от 10 до 80, включая их', () => {
        expect(typeof randomizer()).toBe('number');
        expect(randomizer()).toBeGreaterThanOrEqual(10);
        expect(randomizer()).toBeLessThanOrEqual(80);
    });
    
    it('диапазон', () => {
        expect(randomizer()).toBeGreaterThanOrEqual(10);
        expect(randomizer()).toBeLessThanOrEqual(80);
    });
}); 

describe('Проверка функции getArr', () => {
    it('Проверяет число в массиве, ближайшее к нулю', () => {
        expect(getArr([1])).toBe(1);
        expect(getArr([1, 2])).toBe(1);
        expect(getArr([2, 3])).toBe(2);
        expect(getArr([3, 2])).toBe(2);
        expect(getArr([-1, 1])).toBe(1);
        expect(getArr([-1, 0, 1])).toBe(0);
        expect(getArr([-4, -4, 4, -3, 3, 3])).toBe(3);
    });
}); 

