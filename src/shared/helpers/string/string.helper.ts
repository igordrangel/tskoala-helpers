import * as lodash from 'lodash';

export class StringHelper {
  
  public static convertDateToBr(stringDate: string): string {
    if (stringDate.indexOf('-') >= 0) {
      const arrStringDate = stringDate.split('-');
      stringDate = `${arrStringDate[2]}/${arrStringDate[1]}/${arrStringDate[0]}`;
    }
    
    return stringDate;
  }
  
  public static split(value: string): string[] {
    if (value.indexOf(',') >= 0) {
      return value.split(',');
    } else {
      return value.split(new RegExp(/\r\n|\r|\n/, 'gi'));
    }
  }
  
  public static clear(value: string) {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/([^\w]+|\s+)/g, '-') // Substitui espaço e outros caracteres por hífen
      .replace(/\-\-+/g, '-')  // Substitui multiplos hífens por um único hífen
      .replace(/(^-+|-+$)/, '');
  }
  
  public static converToCamelCase(value: string) {
    return lodash.camelCase(this.clear(value));
  }
  
  public static unmaskCoin(value: string): number {
    return parseFloat(Number(value
      .replace("R$", "")
      .replace(/\s(?=\s)/g, "")
      .replace(/[\n\r\t]/g, "")
      .replace(/[^0-9a-zA-Z\(,\@\-\!\#\\$\%\&\*\(\)\_\+\=\{\[\}\]\/\?\;\:\.\|)\.]+/g, "")
      .replace(/\./g, "")
      .replace(/,/g, ".")
    ).toFixed(2));
  }
  
  public static generateRandomString(length: number, numbers: boolean, uppercase: boolean = false, lowercase: boolean = false, specialCharacters: boolean = false): string {
    const lmin = 'abcdefghijklmnopqrstuvwxyz';
    const lmai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const num = '1234567890';
    const simb = '@%_-#$%&*!';
    let result = '';
    let characters = '';
  
    if (lowercase) characters += lmin;
    if (uppercase) characters += lmai;
    if (numbers) characters += num;
    if (specialCharacters) characters += simb;
  
    const len = characters.length;
    for (let n = 1; n <= length; n++) {
      const rand = Math.floor(Math.random() * (len - 1 + 1)) + 1;
      result += characters[rand - 1];
    }
  
    return result;
  }
  
  public static applyMaskCpfOnString(cpf: string) {
    return cpf.replace(/\D/g, "")
              .replace(/(\d{3})(\d)/, "$1.$2")
              .replace(/(\d{3})(\d)/, "$1.$2")
              .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }
  
  public static nbl2br(value: string) {
    return value.replace(new RegExp(/\r\n|\r|\n/, 'gi'), '<br/>');
  }
}
