# tskoala-helpers

## Install
```bash
npm i @tskoala/helpers
```
## Usage
<details>
 <summary><strong>ArrayHelper usage</strong></summary>
 
### merge
```bash
let arraySample = [1]
ArrayHelper.merge([2], arraySample);

console.log(arraySample);// [1,2]
```
### filter
```bash
let result = ArrayHelper.filter([
    {teste: 123},
    {teste2: 543}
],"123", "teste");

console.log(result);// [{teste: 123}]
```
### getIndexFromArray
```bash
let index = ArrayHelper.getIndexFromArray([
    {teste: 123},
    {teste: "123"}
],"teste",123);

console.log(index);// 0
```
### splitArray
```bash
let result = ArrayHelper.splitArray([1,2,3,4],2);

console.log(result);// [[1,2],[3,4]]
```
### toString
```bash
let result = ArrayHelper.toString([1,2,3,4],',');

console.log(result);// "1,2,3,4"
```
### orderBy
```bash
let result = ArrayHelper.orderBy([
    {date: new Date('2020-06-18')},
    {date: new Date('2020-06-15')},
    {date: new Date('2020-06-17')},
    {date: new Date('2020-06-20')}
],'date');

// [
//   {date: new Date('2020-06-15')},
//   {date: new Date('2020-06-17')},
//   {date: new Date('2020-06-18')},
//   {date: new Date('2020-06-20')}
// ]
console.log(result);

//inverse
let result = ArrayHelper.orderBy([
    {date: new Date('2020-06-18')},
    {date: new Date('2020-06-15')},
    {date: new Date('2020-06-17')},
    {date: new Date('2020-06-20')}
],'date',true);

// [
//   {date: new Date('2020-06-20')},
//   {date: new Date('2020-06-18')},
//   {date: new Date('2020-06-17')},
//   {date: new Date('2020-06-15')}
// ]
console.log(result);
```
</details><br>

<details>
 <summary><strong>StringHelper usage</strong></summary>
 
### clear
```bash
let result = StringHelper.clear('Olá Mundo');
console.log(result);// "Ola Mundo"

let result = StringHelper.clear('Olá Mundo','-');
console.log(result);// "Ola-Mundo"
```
### nbl2br
```bash
let result = StringHelper.nbl2br('Olá\nMundo');
console.log(result);// "Olá<br/>Mundo"
```
### applyMaskCpfOnString
```bash
let result = StringHelper.applyMaskCpfOnString('47695329037');
console.log(result);// "476.953.290-37"
```
### convertDateToBr
```bash
let result = StringHelper.convertDateToBr('2020-01-01');
console.log(result);// "01/01/2020"
```
### converToCamelCase
```bash
let result = StringHelper.converToCamelCase('Olá Mundo');
console.log(result);// "olaMundo"
```
### split
```bash
let result = StringHelper.split('1,2');
console.log(result);// ['1', '2']
```
### unmaskCoin
```bash
let result = StringHelper.unmaskCoin('1.000,00');
console.log(result);// 1000
```
### generateRandomString
```bash
let result = StringHelper.generateRandomString(4, true, true, true, true);
console.log(result);// "4Oa@"
```
</details>