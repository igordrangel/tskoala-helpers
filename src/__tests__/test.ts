import { StringHelper } from '../string/string.helper';
import { ArrayHelper } from '../array/array.helper';

test('ArrayHelper', () => {
  expect(ArrayHelper.merge([2], [1])).toStrictEqual([1, 2]);
  expect(ArrayHelper.filter([{ teste: 123 }, { teste2: 543 }], '123', 'teste')).toStrictEqual([{ teste: 123 }]);
  expect(ArrayHelper.getIndexFromArray([{ teste: 123 }], 'teste', 123)).toBe(0);
  expect(ArrayHelper.splitArray([1, 2, 3, 4], 2)).toStrictEqual([
    [1, 2],
    [3, 4],
  ]);
  expect(ArrayHelper.toString([1, 2, 3, 4], ',')).toStrictEqual('1,2,3,4');
  expect(
    ArrayHelper.orderBy(
      [
        { date: new Date('2020-06-18') },
        { date: new Date('2020-06-15') },
        { date: new Date('2020-06-17') },
        { date: new Date('2020-06-20') },
      ],
      'date',
    ),
  ).toStrictEqual([
    { date: new Date('2020-06-15') },
    { date: new Date('2020-06-17') },
    { date: new Date('2020-06-18') },
    { date: new Date('2020-06-20') },
  ]);
  expect(
    ArrayHelper.orderBy(
      [
        { date: new Date('2020-06-18') },
        { date: new Date('2020-06-15') },
        { date: new Date('2020-06-17') },
        { date: new Date('2020-06-20') },
      ],
      'date',
      true,
    ),
  ).toStrictEqual([
    { date: new Date('2020-06-20') },
    { date: new Date('2020-06-18') },
    { date: new Date('2020-06-17') },
    { date: new Date('2020-06-15') },
  ]);
});

test('StringHelper', () => {
  expect(StringHelper.clear('Olá Mundo')).toBe('Ola Mundo');
  expect(StringHelper.clear('Olá Mundo', '-')).toBe('Ola-Mundo');
  expect(StringHelper.nbl2br('Olá\nMundo')).toBe('Olá<br/>Mundo');
  expect(StringHelper.applyMaskCpfOnString('47695329037')).toBe('476.953.290-37');
  expect(StringHelper.convertDateToBr('2020-01-01')).toBe('01/01/2020');
  expect(StringHelper.converToCamelCase('Olá Mundo')).toBe('olaMundo');
  expect(StringHelper.split('1,2')).toStrictEqual(['1', '2']);
  expect(StringHelper.unmaskCoin('1.000,00')).toBe(1000);
  expect(StringHelper.generateRandomString(4, true, true, true, true));
});
