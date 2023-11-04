const getCount = require('./script');

describe('getCount', () => {
    test('The numbers of vowals in "Abracadabra" is 5 ', () => {
      expect(getCount('abracadabra')).toBe(5);
    });
    test('Works with separate words in a string', () => { 
        expect(getCount('Tengo hambre')).toBe(4);
    })
  });