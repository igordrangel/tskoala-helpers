import { KoalaStringHelper } from '../string/koala-string.helper';
import { KoalaArrayHelper } from '../array/koala-array.helper';
import { KoalaDateHelper } from '../date/koala-date.helper';
import { KoalaDelayHelper } from '../delay/koala-delay.helper';
import { KoalaObjectHelper } from '../object/koala-object.helper';

test('KoalaArrayHelper', () => {
  expect(KoalaArrayHelper.merge([2], [1])).toStrictEqual([1, 2]);
  expect(KoalaArrayHelper.filter([{ teste: 123 }, { teste2: 543 }], '123', 'teste')).toStrictEqual([{ teste: 123 }]);
  expect(KoalaArrayHelper.getIndexFromArray([{ teste: 123 }, { teste: 123 }], 'teste', 123)).toBe(0);
  expect(KoalaArrayHelper.splitArray([1, 2, 3, 4], 2)).toStrictEqual([
    [1, 2],
    [3, 4],
  ]);
  expect(KoalaArrayHelper.toString([1, 2, 3, 4], ',')).toStrictEqual('1,2,3,4');
  expect(
    KoalaArrayHelper.orderBy(
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
    KoalaArrayHelper.orderBy(
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

test('KoalaStringHelper', async () => {
  expect(KoalaStringHelper.clear('Olá Mundo', '-')).toBe('Ola-Mundo');
  expect(KoalaStringHelper.nbl2br('Olá\nMundo')).toBe('Olá<br/>Mundo');
  expect(KoalaStringHelper.applyMaskCpfOnString('9964085842')).toBe('099.640.858-42');
  expect(KoalaStringHelper.convertDateToBr('2020-01-01')).toBe('01/01/2020');
  expect(KoalaStringHelper.converToCamelCase('Olá Mundo')).toBe('olaMundo');
  expect(KoalaStringHelper.split('1,2')).toStrictEqual(['1', '2']);
  expect(KoalaStringHelper.unmaskCoin('1.000,00')).toBe(1000);
  expect(KoalaStringHelper.generateRandomString(4, true, true, true, true));
  expect(await KoalaStringHelper.generateRandomNumber(1000, 1000)).toBe(1000);
});

test('KoalaDateHelper', () => {
  expect(KoalaDateHelper.transform('1993-11-02', true, false)).toBe('02/11/1993');
  expect(KoalaDateHelper.transform('2020-06-20 00:00:00', false, true)).toBe('00:00:00');
  expect(KoalaDateHelper.transform('2020-06-20 00:00:00')).toBe('20/06/2020 00:00:00');
  expect(KoalaDateHelper.transform(KoalaDateHelper.add(1, 'days', '2020-01-01'), true, false)).toBe('02/01/2020');
  expect(KoalaDateHelper.transform(KoalaDateHelper.sub(1, 'days', '2020-01-02'), true, false)).toBe('01/01/2020');
  expect(KoalaDateHelper.sub(1, 'days', '2020-01-02', 'DD/MM/YYYY')).toBe('01/01/2020');
});

test('KoalaDelayHelper', async () => {
  await KoalaDelayHelper.waitFor(1000);
  expect(true).toBe(true);
});

test('KoalaObjectHelper', () => {
  expect(KoalaObjectHelper.merge({ teste: 1 }, { teste2: 2 })).toStrictEqual({ teste: 1, teste2: 2 });
  expect(
    KoalaObjectHelper.toString(
      [
        { param1: 'Hellow', param2: 'World' },
        { param1: 'Olá', param2: 'Mundo' },
      ],
      ['param1', 'param2'],
      ',',
      ' ',
    ),
  ).toBe('Hellow World,Olá Mundo');
});
