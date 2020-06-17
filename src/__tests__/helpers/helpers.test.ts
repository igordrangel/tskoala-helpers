import { StringHelper } from '../../shared/helpers/string/string.helper';
import { ArrayHelper } from '../../shared/helpers/array/array.helper';

test('ArrayHelper', () => {
  expect(ArrayHelper.merge([2], [1])).toStrictEqual([1, 2]);
  //expect(ArrayHelper.filter([{teste: 123,teste2: 543}],"123", "teste")).toStrictEqual([{teste: 123}]);
});

test('StringHelper', () => {
  expect(StringHelper.clear('Olá Mundo')).toBe('Ola-Mundo');
  expect(StringHelper.nbl2br('Olá\nMundo')).toBe('Olá<br/>Mundo');
  expect(StringHelper.applyMaskCpfOnString('15031236779')).toBe('150.312.367-79');
  expect(StringHelper.convertDateToBr('2020-01-01')).toBe('01/01/2020');
  expect(StringHelper.converToCamelCase('Olá Mundo')).toBe('olaMundo');
  expect(StringHelper.split('1,2')).toStrictEqual(['1', '2']);
  expect(StringHelper.unmaskCoin('1.000,00')).toBe(1000);
  expect(StringHelper.generateRandomString(4, true, true, true, true));
});
