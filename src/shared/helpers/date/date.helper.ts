import * as moment_ from 'moment';

const moment = moment_;

export class DateHelper {
  
  public static transform(value: string, getDate: boolean = true, getHours: boolean = true) {
    let date = new Date(value);
    let dateFormated = '';
    let hourFomated = '';
    
    if (getDate) {
      let d = (date.getDate() + 1).toString();
      let m = (date.getMonth() + 1).toString();
      let y = date.getFullYear().toString();
      
      if (d.length == 1) {
        d = '0' + d;
      }
      if (m.length == 1) {
        m = '0' + m;
      }
      
      dateFormated = `${d}/${m}/${y}`;
    }
    
    if (getHours) {
      let h = date.getHours();
      let min = date.getMinutes();
      let s = date.getSeconds();
      
      hourFomated = `${h}:${min}:${s}`;
    }
    
    if (!getDate && getHours) {
      return hourFomated;
    } else if (getDate && !getHours) {
      return dateFormated;
    } else {
      return `${dateFormated} ${hourFomated}`;
    }
  }
  
  public static add(qtd: number, type: 'days' | 'months' | 'years' = 'days') {
    return moment(new Date()).add(qtd, type);
  }
  
  public static sub(qtd: number, type: 'days' | 'months' | 'years' = 'days') {
    return moment(new Date()).subtract(qtd, type);
  }
}
