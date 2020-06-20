# tskoala-helpers

## Install
```bash
npm i tskoala-helpers
```
## Usage
<details>
 <summary><strong>KoalaArrayHelper usage</strong></summary>
 
### merge
```bash
let arraySample = [1]
KoalaArrayHelper.merge([2], arraySample);
console.log(arraySample);// [1,2]
```
### filter
```bash
let result = KoalaArrayHelper.filter([
    {teste: 123},
    {teste2: 543}
],"123", "teste");
console.log(result);// [{teste: 123}]
```
### getIndexFromArray
```bash
let index = KoalaArrayHelper.getIndexFromArray([
    {teste: 123},
    {teste: "123"}
],"teste",123);
console.log(index);// 0
```
### splitArray
```bash
let result = KoalaArrayHelper.splitArray([1,2,3,4],2);
console.log(result);// [[1,2],[3,4]]
```
### toString
```bash
let result = KoalaArrayHelper.toString([1,2,3,4],',');
console.log(result);// "1,2,3,4"
```
### orderBy
```bash
let result = KoalaArrayHelper.orderBy([
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
let result = KoalaArrayHelper.orderBy([
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
 <summary><strong>KoalaStringHelper usage</strong></summary>
 
### clear
```bash
let result = KoalaStringHelper.clear('Olá Mundo');
console.log(result);// "Ola Mundo"

let result = KoalaStringHelper.clear('Olá Mundo','-');
console.log(result);// "Ola-Mundo"
```
### nbl2br
```bash
let result = KoalaStringHelper.nbl2br('Olá\nMundo');
console.log(result);// "Olá<br/>Mundo"
```
### applyMaskCpfOnString
```bash
let result = KoalaStringHelper.applyMaskCpfOnString('47695329037');
console.log(result);// "476.953.290-37"
```
### convertDateToBr
```bash
let result = KoalaStringHelper.convertDateToBr('2020-01-01');
console.log(result);// "01/01/2020"
```
### converToCamelCase
```bash
let result = KoalaStringHelper.converToCamelCase('Olá Mundo');
console.log(result);// "olaMundo"
```
### split
```bash
let result = KoalaStringHelper.split('1,2');
console.log(result);// ['1', '2']
```
### unmaskCoin
```bash
let result = KoalaStringHelper.unmaskCoin('1.000,00');
console.log(result);// 1000
```
### generateRandomString
```bash
let result = KoalaStringHelper.generateRandomString(4, true, true, true, true);
console.log(result);// "4Oa@"
```
</details><br>

<details>
 <summary><strong>KoalaDateHelper usage</strong></summary>
 
### transform
```bash
let result = KoalaDateHelper.transform('2020-06-20 00:00:00',true, false);
console.log(result);// '20/06/2020'

let result = KoalaDateHelper.transform('2020-06-20 00:00:00',false, true);
console.log(result);// '00:00:00'

let result = KoalaDateHelper.transform('2020-06-20 00:00:00');
console.log(result);// '20/06/2020 00:00:00'
```
### add
```bash
let result = KoalaDateHelper.add(1,'days', '2020-01-01');
console.log(result);// '2020-01-02'
```
### sub
```bash
let result = KoalaDateHelper.sub(1,'days', '2020-01-02');
console.log(result);// '2020-01-01'
```
</details><br>

<details>
 <summary><strong>KoalaDelayHelper usage</strong></summary>
 
### waitFor
```bash
public async ForAsyncFunctions(){
    await KoalaDelayHelper.waitFor(1000); // wait's 1s after to pass new line
    // some code
}
```
</details><br>

<details>
 <summary><strong>KoalaObjectHelper usage</strong></summary>
 
### downloadBase64File
> For frontend apps download file by base64
```bash
KoalaObjectHelper.downloadBase64File({
    filename: 'test.jpg',
    type: 'image/jpg',
    base64File: '/9j/4AAQSkZJRgABA...'
});
```
> For frontend apps view pdf file by base64
```bash
KoalaObjectHelper.viewPdf({
    filename: 'test.pdf',
    type: 'application/pdf',
    base64File: '/9j/4AAQSkZJRgABA...'
});
```
> Gets a Blob file by base64
```bash
let blob = KoalaObjectHelper.getBlobFile(
    '/9j/4AAQSkZJRgABA...',
    'image/jpg'
);
```
### merge
```bash
let result = KoalaObjectHelper.merge(
    {teste: 1}, 
    {teste2: 2}
);
console.log(result); // {teste: 1,teste2: 2}
```
### toString
```bash
let result = KoalaObjectHelper.toString([
    {param1: "Hellow",param2: "World"},
    {param1: "Olá", param2: "Mundo"}
],['param1','param2'], ","," ");
console.log(result); // "Hellow World,Olá Mundo"
```
</details><br>